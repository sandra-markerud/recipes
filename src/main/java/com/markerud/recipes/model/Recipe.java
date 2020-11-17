package com.markerud.recipes.model;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Accessors(chain = true)
@Table(name = "RECIPES")
public class Recipe extends BaseEntity {

    @Column(name = "NAME")
    private String name;

    @Column(name = "INSTRUCTION", length = 4000)
    private String instruction;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "recipe")
    private List<Ingredient> ingredients = new ArrayList<>();

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
