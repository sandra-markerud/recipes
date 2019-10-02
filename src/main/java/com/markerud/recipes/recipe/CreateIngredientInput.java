package com.markerud.recipes.recipe;

public class CreateIngredientInput {

    private Double quantity;
    private Long unitId;
    private Long foodId;

    public CreateIngredientInput(Double quantity, Long unitId, Long foodId) {
        this.quantity = quantity;
        this.unitId = unitId;
        this.foodId = foodId;
    }

    public Double getQuantity() {
        return quantity;
    }

    public Long getUnitId() {
        return unitId;
    }

    public Long getFoodId() {
        return foodId;
    }

}
