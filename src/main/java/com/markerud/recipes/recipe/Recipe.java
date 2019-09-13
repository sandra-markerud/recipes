package com.markerud.recipes.recipe;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;

import com.markerud.recipes.jpa.BaseEntity;

@Entity
@Table(name = "RECIPES")
public class Recipe extends BaseEntity {

    @Column(name = "NAME")
    private String name;

    @Column(name = "INSTRUCTION")
    private String instruction;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "recipe")
    private Set<Ingredient> ingredients = new HashSet<>();

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

    public Set<Ingredient> getIngredients() {
        return ingredients;
    }

    public Recipe addIngredient(Ingredient ingredient) {
        ingredients.add(ingredient);
        ingredient.setRecipe(this);
        return this;
    }

    @Override
    public String toString() {
        String localPart = "name=" + name;
        return String.format(super.toString(), localPart);
    }

}
