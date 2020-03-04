package com.markerud.recipes.ui;

import static com.markerud.recipes.ViewConstants.RECIPES_DETAIL_PAGE;
import static com.markerud.recipes.ViewConstants.RECIPES_LIST_PAGE;
import static org.hamcrest.CoreMatchers.hasItem;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasProperty;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import com.markerud.recipes.model.Food;
import com.markerud.recipes.model.Ingredient;
import com.markerud.recipes.model.Recipe;
import com.markerud.recipes.model.Unit;
import com.markerud.recipes.persistence.FoodRepository;
import com.markerud.recipes.persistence.RecipeRepository;
import com.markerud.recipes.persistence.UnitRepository;

@SpringBootTest
@AutoConfigureMockMvc
class RecipesControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private RecipeRepository recipeRepo;

	@Autowired
	private FoodRepository foodRepo;

	@Autowired
	private UnitRepository unitRepo;

	@Test
	void showRecipesListPage() throws Exception {
		recipeRepo.saveAll(List.of(new Recipe().setName("Schinkennudeln"), new Recipe().setName("Obstsalat")));

		mockMvc.perform(get("/recipes"))
				.andExpect(status().isOk())
				.andExpect(model().attribute("recipes", hasSize(2)))
				.andExpect(model().attribute("recipes", hasItem(hasProperty("name", equalTo("Schinkennudeln")))))
				.andExpect(model().attribute("recipes", hasItem(hasProperty("name", equalTo("Obstsalat")))))
				.andExpect(view().name(RECIPES_LIST_PAGE));
	}

	@Test
	void showRecipesDetailPage() throws Exception {
		Unit piece = unitRepo.saveAndFlush(new Unit().setLongName("Stück").setShortName("ST"));
		Recipe recipe = persistRecipe("Obstsalat", "alles kleinschnibbeln...", //
				createIngredient(2.0, piece, "Apfel"), //
				createIngredient(3.0, piece, "Birne"), //
				createIngredient(1.0, piece, "Banane"));

		mockMvc.perform(get("/recipes/detail/{id}", recipe.getId()))
				.andExpect(status().isOk())
				.andExpect(model().attributeExists("recipe"))
				.andExpect(model().attribute("recipe", hasProperty("name", equalTo("Obstsalat"))))
				.andExpect(model().attribute("recipe", hasProperty("ingredients", hasSize(3))))
				.andExpect(view().name(RECIPES_DETAIL_PAGE));
	}

	private Recipe persistRecipe(String name, String instruction, Ingredient... ingredients) {
		Recipe recipe = new Recipe().setName(name).setInstruction(instruction);
		Arrays.stream(ingredients).forEach(recipe::addIngredient);
		return recipeRepo.save(recipe);
	}

	private Ingredient createIngredient(Double quantity, Unit unit, String foodName) {
		Food createdFood = foodRepo.saveAndFlush(new Food().setName(foodName));
		return new Ingredient().setQuantity(quantity).setUnit(unit).setFood(createdFood);
	}

}
