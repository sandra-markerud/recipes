package com.markerud.recipes.graphql;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.markerud.recipes.food.CreateFoodPayload;
import com.markerud.recipes.food.Food;
import com.markerud.recipes.food.FoodRepo;
import com.markerud.recipes.recipe.*;
import graphql.schema.DataFetcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Map;

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
        Map<String, String> input = environment.getArgument("input");
        Recipe recipeToBeCreasted = objectMapper.convertValue(input, Recipe.class);
        Recipe savedRecipe = recipeRepo.save(recipeToBeCreasted);
        return new CreateRecipePayload(savedRecipe);
    };

}
