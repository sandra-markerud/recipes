package com.markerud.recipes.persistence;

import com.markerud.recipes.model.Unit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UnitRepository extends JpaRepository<Unit, Long> {

}
