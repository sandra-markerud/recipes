package com.markerud.recipes.ui;

import static com.markerud.recipes.ViewConstants.RECIPES_LIST_PAGE;
import static org.hamcrest.CoreMatchers.hasItem;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasProperty;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import com.markerud.recipes.model.Recipe;
import com.markerud.recipes.persistence.RecipeRepository;

@SpringBootTest
@AutoConfigureMockMvc
public class RecipesListControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private RecipeRepository recipeRepository;

	@Test
	void showRecipesListView() throws Exception {
		recipeRepository.saveAll(List.of(new Recipe().setName("Schinkennudeln"), new Recipe().setName("Obstsalat")));

		mockMvc.perform(get("/recipes"))
				.andExpect(status().isOk())
				.andExpect(model().attribute("recipes", hasSize(2)))
				.andExpect(model().attribute("recipes", hasItem(hasProperty("name", equalTo("Schinkennudeln")))))
				.andExpect(model().attribute("recipes", hasItem(hasProperty("name", equalTo("Obstsalat")))))
				.andExpect(view().name(RECIPES_LIST_PAGE));
	}

}
