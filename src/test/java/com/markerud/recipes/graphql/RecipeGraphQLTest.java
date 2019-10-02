package com.markerud.recipes.graphql;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.graphql.spring.boot.test.GraphQLResponse;
import com.graphql.spring.boot.test.GraphQLTestTemplate;
import com.markerud.recipes.food.Food;
import com.markerud.recipes.food.FoodRepo;
import com.markerud.recipes.recipe.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.io.IOException;

import static java.util.Arrays.stream;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.annotation.DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode = BEFORE_EACH_TEST_METHOD)
class RecipeGraphQLTest {

    private static final Long INVALID_ID = 4711L;

    @Autowired
    private GraphQLTestTemplate graphQLTestTemplate;

    @Autowired
    private RecipeRepo recipeRepo;

    @Autowired
    private FoodRepo foodRepo;

    @Autowired
    private UnitRepo unitRepo;

    private ObjectNode variables;

    @BeforeEach
    void setUp() {
        variables = VariablesUtil.createVariables();
    }

    @Test
    void createRecipe() throws IOException {
        // given
        Food apple = foodRepo.saveAndFlush(new Food().setName("Apfel"));
        Food banana = foodRepo.saveAndFlush(new Food().setName("Banane"));
        Unit piece = unitRepo.saveAndFlush(new Unit().setLongName("Stück").setShortName("ST"));
        variables.put("name", "Obstsalat");
        variables.put("instruction", "Alles kleinschnibbeln und in eine Schüssel geben.");
        ArrayNode ingredients = variables.putArray("ingredients");
        ingredients.addPOJO((new CreateIngredientInput(1.0, piece.getId(), apple.getId())));
        ingredients.addPOJO((new CreateIngredientInput(1.0, piece.getId(), banana.getId())));

        // when
        GraphQLResponse createRecipeResponse = graphQLTestTemplate.perform("graphql/createRecipe.graphql", variables);

        // then
        JsonNode createdRecipe = createRecipeResponse.readTree().get("data").get("createRecipe").get("recipe");
        assertThat(createdRecipe.get("name").asText(), equalTo("Obstsalat"));
        assertThat(createdRecipe.get("instruction").asText(), equalTo("Alles kleinschnibbeln und in eine Schüssel geben."));
        assertThat(createdRecipe.get("ingredients").size(), equalTo(2));
    }

    @Test
    void createRecipe_whenIngredientUnitIsInvalid() throws IOException {
        // given
        Food apple = foodRepo.saveAndFlush(new Food().setName("Apfel"));
        variables.put("name", "Obstsalat");
        variables.put("instruction", "Alles kleinschnibbeln und in eine Schüssel geben.");
        ArrayNode ingredients = variables.putArray("ingredients");
        ingredients.addPOJO((new CreateIngredientInput(1.0, INVALID_ID, apple.getId())));

        // when
        GraphQLResponse createRecipeResponse = graphQLTestTemplate.perform("graphql/createRecipe.graphql", variables);

        // then
        assertTrue(createRecipeResponse.readTree().get("data").isNull());
        assertThat(createRecipeResponse.readTree().get("errors").get(0).get("message").asText(), containsString("Unit with given ID does not exist"));
    }

    @Test
    void fetchRecipeById_whenRecipeFound() throws IOException {
        // given
        Unit gramme = unitRepo.saveAndFlush(new Unit().setLongName("Gramm").setShortName("g"));
        Recipe recipe = persistRecipe("Schinkennudeln", "Man nehme...", //
                createIngredient(500.0, gramme, "Nudeln"), //
                createIngredient(200.0, gramme, "gekochter Schinken"));
        variables.put("id", recipe.getId());

        // when
        GraphQLResponse fetchRecipeByIdResponse = graphQLTestTemplate.perform("graphql/fetchRecipeById.graphql", variables);

        // then
        JsonNode fetchedRecipe = fetchRecipeByIdResponse.readTree().get("data").get("recipe");
        assertThat(fetchedRecipe.get("name").asText(), equalTo("Schinkennudeln"));
        assertThat(fetchedRecipe.get("instruction").asText(), equalTo("Man nehme..."));
        assertThat(fetchedRecipe.get("ingredients").size(), equalTo(2));
    }

    @Test
    void fetchRecipeById_whenRecipeNotFound() throws IOException {
        // given
        variables.put("id", 4711L);

        // when
        GraphQLResponse fetchRecipeByIdResponse = graphQLTestTemplate.perform("graphql/fetchRecipeById.graphql", variables);

        // then
        JsonNode fetchedRecipe = fetchRecipeByIdResponse.readTree().get("data").get("recipe");
        assertTrue(fetchedRecipe.isNull());
    }

    @Test
    void fetchRecipeById_handleInvalidNumberFormatForId() throws IOException {
        // given
        variables.put("id", "somethingEvilOrWeird");

        // when
        GraphQLResponse fetchRecipeByIdResponse = graphQLTestTemplate.perform("graphql/fetchRecipeById.graphql", variables);

        // then
        JsonNode fetchedRecipe = fetchRecipeByIdResponse.readTree().get("data").get("recipe");
        assertTrue(fetchedRecipe.isNull());
    }

    @Test
    void fetchAllRecipes_whenRecipesFound() throws IOException {
        // given
        Unit piece = unitRepo.saveAndFlush(new Unit().setLongName("Stück").setShortName("ST"));
        persistRecipe("Obstsalat", "alles kleinschnibbeln...", //
                createIngredient(2.0, piece, "Apfel"), //
                createIngredient(3.0, piece, "Birne"), //
                createIngredient(1.0, piece, "Banane"));

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

    private Ingredient createIngredient(Double quantity, Unit unit, String foodName) {
        Food createdFood = foodRepo.saveAndFlush(new Food().setName(foodName));
        return new Ingredient().setQuantity(quantity).setUnit(unit).setFood(createdFood);
    }

}
