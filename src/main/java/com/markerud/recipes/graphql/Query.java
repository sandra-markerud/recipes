package com.markerud.recipes.graphql;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.markerud.recipes.food.Food;
import com.markerud.recipes.food.FoodRepo;
import graphql.schema.DataFetcher;

@Component
public class Query {

    private FoodRepo foodRepo;

    @Autowired
    public Query(FoodRepo foodRepo) {
        this.foodRepo = foodRepo;
    }

    DataFetcher<List<Food>> allFoodsFetcher = environment -> foodRepo.findAll();

}
