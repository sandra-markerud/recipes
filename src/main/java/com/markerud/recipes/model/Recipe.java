package com.markerud.recipes.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "RECIPES")
public class Recipe extends BaseEntity {

    @Column(name = "NAME")
    private String name;

    @Column(name = "INSTRUCTION", length = 4000)
    private String instruction;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "recipe")
    private List<Ingredient> ingredients = new ArrayList<>();

    public String getName() {
        return name;
    }

    public Recipe setName(String name) {
        this.name = name;
        return this;
    }

    public String getInstruction() {
        return instruction;
    }

    public Recipe setInstruction(String instruction) {
        this.instruction = instruction;
        return this;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void addIngredient(Ingredient ingredient) {
        ingredients.add(ingredient);
        ingredient.setRecipe(this);
    }

    @Override
    public String toString() {
        String localPart = "name=" + name;
        return String.format(super.toString(), localPart);
    }

}
