package com.markerud.recipes.graphql;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.markerud.recipes.food.Food;
import com.markerud.recipes.food.FoodRepo;
import com.markerud.recipes.recipe.Recipe;
import com.markerud.recipes.recipe.RecipeRepo;
import graphql.schema.DataFetcher;

@Component
public class Query {

    private FoodRepo foodRepo;
    private RecipeRepo recipeRepo;

    @Autowired
    public Query(FoodRepo foodRepo, RecipeRepo recipeRepo) {
        this.foodRepo = foodRepo;
        this.recipeRepo = recipeRepo;
    }

    DataFetcher<List<Food>> allFoodsFetcher = environment -> foodRepo.findAll();

    DataFetcher<List<Recipe>> allRecipesFetcher = dataFetchingEnvironment -> recipeRepo.findAll();

}
