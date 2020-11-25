package com.markerud.recipes.ui;

import com.markerud.recipes.model.Food;
import com.markerud.recipes.model.Recipe;
import com.markerud.recipes.model.Unit;
import com.markerud.recipes.persistence.FoodRepository;
import com.markerud.recipes.persistence.RecipeRepository;
import com.markerud.recipes.persistence.UnitRepository;
import com.markerud.recipes.ui.forms.RecipeForm;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Optional;

import static com.markerud.recipes.ViewConstants.*;
import static com.markerud.recipes.persistence.RecipeRepository.recipeDetailEntityGraph;
import static org.springframework.data.domain.Sort.Order.asc;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@Controller
@RequiredArgsConstructor
@RequestMapping("/recipes")
public class RecipesController {

    private final RecipeRepository recipeRepo;
    private final UnitRepository unitRepository;
    private final FoodRepository foodRepository;

    @GetMapping
    public ModelAndView showRecipesListPage() {
        ModelAndView mav = new ModelAndView(RECIPES_LIST_PAGE);
        mav.addObject("recipes", recipeRepo.findAllProjectedBy());
        return mav;
    }

    @GetMapping("/{id}")
    public ModelAndView showRecipesDetailPage(@PathVariable("id") Long id) {
        ModelAndView mav = new ModelAndView(RECIPES_DETAIL_PAGE);
        Optional<Recipe> potentialRecipe = recipeRepo.findById(id, recipeDetailEntityGraph);
        mav.addObject("recipe", potentialRecipe.orElseThrow(() -> new ResponseStatusException(NOT_FOUND)));
        return mav;
    }

    @GetMapping("/new")
    public ModelAndView showNewRecipePage() {
        ModelAndView mav = new ModelAndView(NEW_RECIPE_PAGE);
        List<Unit> units = unitRepository.findAll(Sort.by(asc("longName")));
        List<Food> foods = foodRepository.findAll(Sort.by(asc("name")));
        mav.addObject("units", units);
        mav.addObject("foods", foods);
        mav.addObject("recipeForm", new RecipeForm());
        return mav;
    }

}





