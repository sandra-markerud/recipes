package com.markerud.recipes.graphql;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.annotation.DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD;

import java.io.IOException;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.graphql.spring.boot.test.GraphQLResponse;
import com.graphql.spring.boot.test.GraphQLTestTemplate;
import com.markerud.recipes.food.Food;
import com.markerud.recipes.food.FoodRepo;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode = BEFORE_EACH_TEST_METHOD)
class FoodGraphQLTest {

    @Autowired
    private GraphQLTestTemplate graphQLTestTemplate;

    @Autowired
    private FoodRepo foodRepo;

    @Test
    void fetchAllFoods() throws IOException {
        // given
        foodRepo.save(new Food().setName("Apfel"));
        foodRepo.save(new Food().setName("Birne"));

        // when
        GraphQLResponse fetchAllFoodsResponse = graphQLTestTemplate.postForResource("graphql/fetchAllFoods.graphql");

        // then
        assertThat(fetchAllFoodsResponse.get("$.data.allFoods[0].id"), equalTo("1"));
        assertThat(fetchAllFoodsResponse.get("$.data.allFoods[0].name"), equalTo("Apfel"));
        assertThat(fetchAllFoodsResponse.get("$.data.allFoods[1].id"), equalTo("2"));
        assertThat(fetchAllFoodsResponse.get("$.data.allFoods[1].name"), equalTo("Birne"));
    }

}
