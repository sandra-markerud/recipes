package com.markerud.recipes.ui;

import static com.markerud.recipes.ViewConstants.RECIPES_LIST_PAGE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.markerud.recipes.persistence.RecipeRepository;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/recipes")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class RecipesListController {

	private final RecipeRepository recipeRepo;

	@GetMapping
	public ModelAndView showRecipesListView() {
		ModelAndView mav = new ModelAndView(RECIPES_LIST_PAGE);
		mav.addObject("recipes", recipeRepo.findAllProjectedBy());
		return mav;
	}

}
