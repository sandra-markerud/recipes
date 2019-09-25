package com.markerud.recipes.graphql;

import com.cosium.spring.data.jpa.entity.graph.domain.EntityGraph;
import com.markerud.recipes.food.Food;
import com.markerud.recipes.food.FoodRepo;
import com.markerud.recipes.recipe.Recipe;
import com.markerud.recipes.recipe.RecipeRepo;
import com.markerud.recipes.recipe.Unit;
import com.markerud.recipes.recipe.UnitRepo;
import graphql.schema.DataFetcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

import static com.markerud.recipes.jpa.EntityGraphSelector.deriveEntityGraphForRecipe;

@Component
public class Query {

    private FoodRepo foodRepo;
    private RecipeRepo recipeRepo;
    private UnitRepo unitRepo;

    @Autowired
    public Query(FoodRepo foodRepo, RecipeRepo recipeRepo, UnitRepo unitRepo) {
        this.foodRepo = foodRepo;
        this.recipeRepo = recipeRepo;
        this.unitRepo = unitRepo;
    }

    DataFetcher<List<Unit>> allUnitsFetcher = environment -> unitRepo.findAll();

    DataFetcher<List<Food>> allFoodsFetcher = environment -> foodRepo.findAll();

    DataFetcher<Iterable<Recipe>> allRecipesFetcher = dataFetchingEnvironment -> {
        EntityGraph entityGraph = deriveEntityGraphForRecipe(dataFetchingEnvironment);
        return recipeRepo.findAll(entityGraph);
    };

    DataFetcher<Optional<Recipe>> recipeFetcher = environment -> {
        try {
            Long id = Long.valueOf(environment.getArgument("id"));
            EntityGraph entityGraph = deriveEntityGraphForRecipe(environment);
            return recipeRepo.findById(id, entityGraph);
        } catch (NumberFormatException e) {
            return Optional.empty();
        }
    };

}
