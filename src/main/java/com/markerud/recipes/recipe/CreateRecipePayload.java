package com.markerud.recipes.recipe;

public class CreateRecipePayload {

    private Recipe recipe;

    public CreateRecipePayload(Recipe recipe) {
        this.recipe = recipe;
    }

    public Recipe getRecipe() {
        return recipe;
    }

}
