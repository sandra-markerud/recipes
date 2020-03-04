package com.markerud.recipes.persistence;

import java.util.List;

import com.cosium.spring.data.jpa.entity.graph.repository.EntityGraphJpaRepository;
import com.markerud.recipes.model.Recipe;
import com.markerud.recipes.model.RecipesListView;

public interface RecipeRepository extends EntityGraphJpaRepository<Recipe, Long> {

	List<RecipesListView> findAllProjectedBy();

}
