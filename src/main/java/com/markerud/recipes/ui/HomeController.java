package com.markerud.recipes.ui;

import static com.markerud.recipes.ViewConstants.HOME_PAGE;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping("/old")
	public String showOldHomepage() {
		return "homeOld";
	}

	@GetMapping("/")
	public String showNewHomepage() {
		return HOME_PAGE;
	}

}
