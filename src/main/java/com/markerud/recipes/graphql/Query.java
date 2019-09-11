package com.markerud.recipes.graphql;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.markerud.recipes.food.Food;
import graphql.schema.DataFetcher;

@Component
public class Query {

    DataFetcher<List<Food>> allFoodsFetcher = environment -> {
        ArrayList<Food> foods = new ArrayList<>();
        foods.add(new Food(1L, "Apfel"));
        foods.add(new Food(2L, "Birne"));
        foods.add(new Food(3L, "Banane"));
        foods.add(new Food(4L, "Orange"));
        foods.add(new Food(5L, "Kiwi"));
        return foods;
    };
}
