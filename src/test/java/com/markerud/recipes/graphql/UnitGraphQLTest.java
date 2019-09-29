package com.markerud.recipes.graphql;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.graphql.spring.boot.test.GraphQLResponse;
import com.graphql.spring.boot.test.GraphQLTestTemplate;
import com.markerud.recipes.recipe.Unit;
import com.markerud.recipes.recipe.UnitRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.io.IOException;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.annotation.DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode = BEFORE_EACH_TEST_METHOD)
class UnitGraphQLTest {

    @Autowired
    private GraphQLTestTemplate graphQLTestTemplate;

    @Autowired
    private UnitRepo unitRepo;

    private ObjectNode variables;

    @BeforeEach
    void setUp() {
        variables = VariablesUtil.createVariables();
    }

    @Test
    void createUnit() throws IOException {
        // given
        variables.put("longName", "Esslöffel");
        variables.put("shortName", "EL");

        // when
        GraphQLResponse createUnitResponse = graphQLTestTemplate.perform("graphql/createUnit.graphql", variables);

        // then
        JsonNode createdUnit = createUnitResponse.readTree().get("data").get("createUnit").get("unit");
        assertThat(createdUnit.get("id").asLong(), notNullValue());
        assertThat(createdUnit.get("longName").asText(), equalTo("Esslöffel"));
        assertThat(createdUnit.get("shortName").asText(), equalTo("EL"));
    }

    @Test
    void fetchAllUnits() throws IOException {
        // given
        unitRepo.save(new Unit().setLongName("Esslöffel").setShortName("EL"));
        unitRepo.save(new Unit().setLongName("Teelöffel").setShortName("TL"));

        // when
        GraphQLResponse fetchAllUnitsResponse = graphQLTestTemplate.postForResource("graphql/fetchAllUnits.graphql");

        // then
        JsonNode allUnits = fetchAllUnitsResponse.readTree().get("data").get("allUnits");

        assertThat(allUnits.size(), equalTo(2));
        assertThat(allUnits.get(0).get("id").asLong(), equalTo(1L));
        assertThat(allUnits.get(0).get("longName").asText(), equalTo("Esslöffel"));
        assertThat(allUnits.get(0).get("shortName").asText(), equalTo("EL"));
        assertThat(allUnits.get(1).get("id").asLong(), equalTo(2L));
        assertThat(allUnits.get(1).get("longName").asText(), equalTo("Teelöffel"));
        assertThat(allUnits.get(1).get("shortName").asText(), equalTo("TL"));
    }

}
