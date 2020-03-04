package com.markerud.recipes;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

@SpringBootTest
class RecipesApplicationTests {

	@Autowired(required = false)
	private ApplicationContext ctx;

	@Test
	void contextLoads() {
		assertNotNull(ctx, "Spring context must be present");
	}

}
