package com.markerud.recipes.ui;

import static com.markerud.recipes.ViewConstants.HOME_PAGE;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping("/")
	public String showHomepage() {
		return HOME_PAGE;
	}

}
