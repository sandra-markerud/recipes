package com.markerud.recipes.ingredient;

import com.cosium.spring.data.jpa.entity.graph.repository.EntityGraphJpaRepository;

public interface IngredientRepo extends EntityGraphJpaRepository<Ingredient, Long> {

}
