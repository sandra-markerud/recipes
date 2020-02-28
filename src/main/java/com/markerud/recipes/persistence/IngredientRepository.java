package com.markerud.recipes.persistence;

import com.cosium.spring.data.jpa.entity.graph.repository.EntityGraphJpaRepository;
import com.markerud.recipes.model.Ingredient;

public interface IngredientRepository extends EntityGraphJpaRepository<Ingredient, Long> {

}
