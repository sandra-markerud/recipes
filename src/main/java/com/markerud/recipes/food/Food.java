package com.markerud.recipes.food;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.NaturalId;

import com.markerud.recipes.jpa.BaseEntity;

@Entity
@Table(name = "FOODS")
public class Food extends BaseEntity {

    @NaturalId
    @Column(name = "NAME")
    private String name;

    public String getName() {
        return name;
    }

    public Food setName(String name) {
        this.name = name;
        return this;
    }

    @Override
    public String toString() {
        String localPart = "name=" + name;
        return String.format(super.toString(), localPart);
    }

}
