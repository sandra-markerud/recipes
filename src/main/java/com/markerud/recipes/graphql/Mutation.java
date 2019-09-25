package com.markerud.recipes.graphql;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.markerud.recipes.food.CreateFoodPayload;
import com.markerud.recipes.food.Food;
import com.markerud.recipes.food.FoodRepo;
import graphql.schema.DataFetcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class Mutation {

    private FoodRepo foodRepo;
    private ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    public Mutation(FoodRepo foodRepo) {
        this.foodRepo = foodRepo;
    }

    DataFetcher<CreateFoodPayload> createFoodFetcher = environment -> {
        Map<String, String> input = environment.getArgument("input");
        Food foodToBeCreated = objectMapper.convertValue(input, Food.class);
        Food savedFood = foodRepo.save(foodToBeCreated);
        return new CreateFoodPayload(savedFood);
    };
}
