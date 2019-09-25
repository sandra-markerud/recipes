package com.markerud.recipes.food;

public class CreateFoodPayload {

    private Food food;

    public CreateFoodPayload(Food food) {
        this.food = food;
    }

    public Food getFood() {
        return food;
    }

}
