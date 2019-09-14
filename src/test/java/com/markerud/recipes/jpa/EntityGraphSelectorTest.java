package com.markerud.recipes.jpa;

import static java.util.Arrays.stream;
import static java.util.Collections.emptyList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.nullValue;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.Mockito.when;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.cosium.spring.data.jpa.entity.graph.domain.EntityGraph;
import com.cosium.spring.data.jpa.entity.graph.domain.EntityGraphType;
import graphql.language.Field;
import graphql.schema.DataFetchingEnvironment;
import graphql.schema.DataFetchingFieldSelectionSet;

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
    void whenEntityeIsRequestedWithFields_onlyTypeFieldsAreInEntityGraph() {
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

    @Test
    void whenEntityIsRequestedWithRootElement_rootElementIsFilteredOutInEntityGraph() {
        // given
        setRequestedFields("food");
        when(environment.getSource()).thenReturn("SomeSource");

        // when
        EntityGraph resultEntityGraph = EntityGraphSelector.deriveEntityGraphForIngredient(environment);

        // then
        assertThat(resultEntityGraph.getEntityGraphAttributePaths(), contains("food"));
    }

    private void setRequestedFields(String... fieldNames) {
        stream(fieldNames).forEach(fieldName -> fieldsByName.put(fieldName, emptyList()));
    }

}