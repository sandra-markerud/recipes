package com.markerud.recipes.jpa;

import com.cosium.spring.data.jpa.entity.graph.domain.EntityGraph;
import com.cosium.spring.data.jpa.entity.graph.domain.EntityGraphUtils;
import graphql.language.Field;
import graphql.schema.DataFetchingEnvironment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;
import java.util.Set;

import static org.apache.commons.lang3.StringUtils.isNotBlank;

public class EntityGraphSelector {

    private static final Logger log = LoggerFactory.getLogger(EntityGraphSelector.class);

    private static final Set<String> INGREDIENT_GRAPH_ENTRIES = Set.of("food", "unit", "recipe");
    private static final Set<String> RECIPE_GRAPH_ENTRIES = Set.of("ingredients", "ingredients.food", "ingredients.unit", "ingredients.recipe");

    public static EntityGraph deriveEntityGraphForIngredient(DataFetchingEnvironment env) {
        return getEntityGraph(env, INGREDIENT_GRAPH_ENTRIES, env.getSource());
    }

    public static EntityGraph deriveEntityGraphForRecipe(DataFetchingEnvironment env) {
        return getEntityGraph(env, RECIPE_GRAPH_ENTRIES, env.getSource());
    }

    private static EntityGraph getEntityGraph(DataFetchingEnvironment env, Set<String> masterEntries,
                                              String rootElement) {
        Map<String, List<Field>> fieldsByName = env.getSelectionSet().get();

        log.info("============= Selected Fields by caller =============");
        fieldsByName.keySet().forEach(log::info);
        log.info("=====================================================");

        String[] applicableGraphEntries = fieldsByName.keySet().stream() //
                .map(field -> field.replaceAll(isNotBlank(rootElement) ? rootElement + "/" : "", "").replaceAll("/",
                        "."))
                .filter(masterEntries::contains) //
                .toArray(String[]::new);
        if (applicableGraphEntries.length > 0) {
            log.info("Entity Graph Entries: " + String.join(", ", applicableGraphEntries));
        }
        return (applicableGraphEntries.length == 0) ? null
                : EntityGraphUtils.fromAttributePaths(applicableGraphEntries);
    }
}