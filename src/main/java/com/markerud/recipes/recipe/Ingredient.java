package com.markerud.recipes.recipe;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.math.BigDecimal;

import com.markerud.recipes.food.Food;
import com.markerud.recipes.jpa.BaseEntity;

@Entity
@Table(name = "INGREDIENTS")
public class Ingredient extends BaseEntity {

    @Column(name = "QUANTITY")
    private BigDecimal quantity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "UNIT_ID")
    private Unit unit;

    @ManyToOne(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST })
    @JoinColumn(name = "FOOD_ID")
    private Food food;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RECIPE_ID")
    private Recipe recipe;

    public BigDecimal getQuantity() {
        return quantity;
    }

    public Ingredient setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
        return this;
    }

    public Unit getUnit() {
        return unit;
    }

    public Ingredient setUnit(Unit unit) {
        this.unit = unit;
        return this;
    }

    public Food getFood() {
        return food;
    }

    public Ingredient setFood(Food food) {
        this.food = food;
        return this;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public Ingredient setRecipe(Recipe recipe) {
        this.recipe = recipe;
        return this;
    }

    @Override
    public String toString() {
        String localPart = "quantity=" + quantity + ", unit=" + unit.getCode() + ", food=" + food.getName();
        return String.format(super.toString(), localPart);
    }

}
