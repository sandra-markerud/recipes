package com.markerud.recipes.graphql;

import com.cosium.spring.data.jpa.entity.graph.domain.EntityGraph;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.markerud.recipes.food.CreateFoodPayload;
import com.markerud.recipes.food.Food;
import com.markerud.recipes.food.FoodRepo;
import com.markerud.recipes.recipe.*;
import graphql.schema.DataFetcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import static com.markerud.recipes.jpa.EntityGraphSelector.deriveEntityGraphForRecipe;
import static java.util.stream.Collectors.toList;

@Component
public class Mutation {

    private FoodRepo foodRepo;
    private UnitRepo unitRepo;
    private RecipeRepo recipeRepo;
    private ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    public Mutation(FoodRepo foodRepo, UnitRepo unitRepo, RecipeRepo recipeRepo) {
        this.foodRepo = foodRepo;
        this.unitRepo = unitRepo;
        this.recipeRepo = recipeRepo;
    }

    DataFetcher<CreateFoodPayload> createFoodFetcher = environment -> {
        Map<String, String> input = environment.getArgument("input");
        Food foodToBeCreated = objectMapper.convertValue(input, Food.class);
        Food savedFood = foodRepo.save(foodToBeCreated);
        return new CreateFoodPayload(savedFood);
    };

    DataFetcher<CreateUnitPayload> createUnitFetcher = environment -> {
        Map<String, String> input = environment.getArgument("input");
        Unit unitToBeCreated = objectMapper.convertValue(input, Unit.class);
        Unit savedUnit = unitRepo.save(unitToBeCreated);
        return new CreateUnitPayload(savedUnit);
    };

    DataFetcher<CreateRecipePayload> createRecipeFetcher = environment -> {
        Map<String, ?> input = environment.getArgument("input");
        List<Ingredient> ingredientsToBeSaved = extractIngredients(input);

        Recipe recipeToBeSaved = objectMapper.convertValue(input, Recipe.class);
        ingredientsToBeSaved.forEach(recipeToBeSaved::addIngredient);
        Recipe savedRecipe = recipeRepo.save(recipeToBeSaved);

        EntityGraph entityGraph = deriveEntityGraphForRecipe(environment);
        Optional<Recipe> refetchedRecipe = recipeRepo.findById(savedRecipe.getId(), entityGraph);

        return new CreateRecipePayload(refetchedRecipe.get());
    };

    private List<Ingredient> extractIngredients(Map<String, ?> input) {
        List<Map<String, ?>> potentialIngredients = (List<Map<String, ?>>) input.remove("ingredients");

        return potentialIngredients.stream().map(i -> {
            Double quantity = (Double) i.get("quantity");
            Optional<Unit> maybeUnit = unitRepo.findById(Long.valueOf(i.get("unitId").toString()));
            Optional<Food> maybeFood = foodRepo.findById(Long.valueOf(i.get("foodId").toString()));
            if (maybeUnit.isEmpty() || maybeFood.isEmpty()) {
                throw new IllegalArgumentException("Ingredient could not be created." //
                        + (maybeFood.isEmpty()? " Food with given ID does not exist." : "") //
                        + (maybeUnit.isEmpty()? " Unit with given ID does not exist." : ""));
            }
            return new Ingredient().setQuantity(quantity).setUnit(maybeUnit.get()).setFood(maybeFood.get());
        }).collect(toList());
    }

}
