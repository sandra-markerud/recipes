package com.markerud.recipes.persistence;

import com.markerud.recipes.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Long> {
}
