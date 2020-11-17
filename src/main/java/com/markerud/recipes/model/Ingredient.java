package com.markerud.recipes.model;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Accessors(chain = true)
@Table(name = "INGREDIENTS")
public class Ingredient extends BaseEntity {

    @Column(name = "QUANTITY")
    private Double quantity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "UNIT_ID")
    private Unit unit;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST})
    @JoinColumn(name = "FOOD_ID")
    private Food food;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RECIPE_ID")
    private Recipe recipe;

    @Override
    public String toString() {
        String localPart = "quantity=" + quantity + ", unit=" + unit.getLongName() + ", food=" + food.getName();
        return String.format(super.toString(), localPart);
    }

}
