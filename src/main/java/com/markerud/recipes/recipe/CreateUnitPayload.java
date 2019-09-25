package com.markerud.recipes.recipe;

public class CreateUnitPayload {

    private Unit unit;

    public CreateUnitPayload(Unit unit) {
        this.unit = unit;
    }

    public Unit getUnit() {
        return unit;
    }

}
