package com.markerud.recipes.ui;

import static com.markerud.recipes.ViewConstants.RECIPES_DETAIL_PAGE;
import static com.markerud.recipes.ViewConstants.RECIPES_LIST_PAGE;
import static com.markerud.recipes.persistence.RecipeRepository.recipeDetailEntityGraph;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.markerud.recipes.model.Recipe;
import com.markerud.recipes.persistence.RecipeRepository;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/recipes")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class RecipesController {

	private final RecipeRepository recipeRepo;

	@GetMapping
	public ModelAndView showRecipesListPage() {
		ModelAndView mav = new ModelAndView(RECIPES_LIST_PAGE);
		mav.addObject("recipes", recipeRepo.findAllProjectedBy());
		return mav;
	}

	@GetMapping("/detail/{id}")
	public ModelAndView showRecipesDetailPage(@PathVariable("id") Long id) {
		ModelAndView mav = new ModelAndView(RECIPES_DETAIL_PAGE);
		Optional<Recipe> potentialRecipe = recipeRepo.findById(id, recipeDetailEntityGraph);
		mav.addObject("recipe", potentialRecipe.orElseThrow());
		return mav;
	}

}
