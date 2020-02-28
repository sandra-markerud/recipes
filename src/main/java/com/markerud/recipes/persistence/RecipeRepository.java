package com.markerud.recipes.persistence;

import com.cosium.spring.data.jpa.entity.graph.repository.EntityGraphJpaRepository;
import com.markerud.recipes.model.Recipe;

public interface RecipeRepository extends EntityGraphJpaRepository<Recipe, Long> {

}
