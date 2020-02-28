package com.markerud.recipes.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import static com.markerud.recipes.ViewConstants.HOME_PAGE;

@Controller

public class HomeController {

    @GetMapping("/")
    public String homepage() {
        return HOME_PAGE;
    }

}
