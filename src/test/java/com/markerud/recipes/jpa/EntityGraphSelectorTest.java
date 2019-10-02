package com.markerud.recipes.jpa;

import com.cosium.spring.data.jpa.entity.graph.domain.EntityGraph;
import com.cosium.spring.data.jpa.entity.graph.domain.EntityGraphType;
import graphql.language.Field;
import graphql.schema.DataFetchingEnvironment;
import graphql.schema.DataFetchingFieldSelectionSet;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import static java.util.Arrays.stream;
import static java.util.Collections.emptyList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class EntityGraphSelectorTest {

    @Mock
    private DataFetchingEnvironment environment;

    @Mock
    private DataFetchingFieldSelectionSet fieldSelectionSet;

    private Map<String, List<Field>> fieldsByName = new LinkedHashMap<>();

    @BeforeEach
    void setUp() {
        when(environment.getSelectionSet()).thenReturn(fieldSelectionSet);
        when(fieldSelectionSet.get()).thenReturn(fieldsByName);
    }

    @Test
    void whenEntityIsRequestedWithFields_onlyTypeFieldsAreInEntityGraph() {
        // given
        setRequestedFields("name", "ingredients", "ingredients/food", "ingredients/food/name", "ingredients/unit", "ingredients/unit/code");

        // when
        EntityGraph resultEntityGraph = EntityGraphSelector.deriveEntityGraphForRecipe(environment);

        // then
        assertThat(resultEntityGraph, notNullValue());
        assertThat(resultEntityGraph.getEntityGraphType(), equalTo(EntityGraphType.FETCH));
        assertFalse(resultEntityGraph.isOptional());
        assertThat(resultEntityGraph.getEntityGraphAttributePaths(), contains("ingredients", "ingredients.food", "ingredients.unit"));
        assertThat(resultEntityGraph.getEntityGraphAttributePaths(), not(contains("name", "ingredients.food.name", "ingredients.unit.code")));
    }

    @Test
    void whenEntityIsRequestedOnlyWithScalarFields_noEntityGraphIsCreated() {
        // given
        setRequestedFields("id", "quantity");

        // when
        EntityGraph resultEntityGraph = EntityGraphSelector.deriveEntityGraphForIngredient(environment);

        // then
        assertThat(resultEntityGraph, nullValue());
    }

    private void setRequestedFields(String... fieldNames) {
        stream(fieldNames).forEach(fieldName -> fieldsByName.put(fieldName, emptyList()));
    }

}