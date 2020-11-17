package com.markerud.recipes.ui;

import static com.markerud.recipes.ViewConstants.HOME_PAGE;
import static com.markerud.recipes.ViewConstants.IMPRINT_PAGE;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String showHomePage() {
        return HOME_PAGE;
    }

    @GetMapping("/imprint")
    public String showImprintPage() {
        return IMPRINT_PAGE;
    }

}
