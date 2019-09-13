package com.markerud.recipes.recipe;

import com.cosium.spring.data.jpa.entity.graph.repository.EntityGraphJpaRepository;

public interface IngredientRepo extends EntityGraphJpaRepository<Ingredient, Long> {

}
