package com.markerud.recipes.graphql;

import static java.util.Arrays.stream;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.annotation.DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD;

import java.io.IOException;
import java.math.BigDecimal;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.fasterxml.jackson.databind.JsonNode;
import com.graphql.spring.boot.test.GraphQLResponse;
import com.graphql.spring.boot.test.GraphQLTestTemplate;
import com.markerud.recipes.food.Food;
import com.markerud.recipes.food.FoodRepo;
import com.markerud.recipes.recipe.Ingredient;
import com.markerud.recipes.recipe.Unit;
import com.markerud.recipes.recipe.UnitRepo;
import com.markerud.recipes.recipe.Recipe;
import com.markerud.recipes.recipe.RecipeRepo;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode = BEFORE_EACH_TEST_METHOD)
class RecipeGraphQLTest {

    @Autowired
    private GraphQLTestTemplate graphQLTestTemplate;

    @Autowired
    private RecipeRepo recipeRepo;

    @Autowired
    private FoodRepo foodRepo;

    @Autowired
    private UnitRepo unitRepo;

    @Test
    void fetchAllRecipes_whenRecipesFound() throws IOException {
        // given
        Unit piece = unitRepo.saveAndFlush(new Unit().setCode("ST"));
        persistRecipe("Obstsalat", "alles kleinschnibbeln...", //
                createIngredient(BigDecimal.ONE, piece, "Apfel"), //
                createIngredient(BigDecimal.ONE, piece, "Birne"), //
                createIngredient(BigDecimal.ONE, piece, "Banane"));

        // when
        GraphQLResponse fetchAllFoodsResponse = graphQLTestTemplate.postForResource("graphql/fetchAllRecipes.graphql");

        // then
        JsonNode allRecipes = fetchAllFoodsResponse.readTree().get("data").get("allRecipes");
        assertThat(allRecipes.size(), equalTo(1));

        JsonNode result = allRecipes.get(0);
        assertThat(result.get("name").asText(), equalTo("Obstsalat"));
        assertThat(result.get("instruction").asText(), equalTo("alles kleinschnibbeln..."));
        assertThat(result.get("ingredients").size(), equalTo(3));
    }

    @Test
    void fetchAllRecipes_whenNoRecipesFound_returnsEmptyCollection() throws IOException {

        // when
        GraphQLResponse fetchAllFoodsResponse = graphQLTestTemplate.postForResource("graphql/fetchAllRecipes.graphql");

        // then
        JsonNode allRecipes = fetchAllFoodsResponse.readTree().get("data").get("allRecipes");
        assertThat(allRecipes.size(), equalTo(0));
    }

    private Recipe persistRecipe(String name, String instruction, Ingredient... ingredients) {
        Recipe recipe = new Recipe().setName(name).setInstruction(instruction);
        stream(ingredients).forEach(recipe::addIngredient);
        return recipeRepo.save(recipe);
    }

    private Ingredient createIngredient(BigDecimal quantity, Unit unit, String foodName) {
        Food createdFood = foodRepo.saveAndFlush(new Food().setName(foodName));
        return new Ingredient().setQuantity(quantity).setUnit(unit).setFood(createdFood);
    }

}
