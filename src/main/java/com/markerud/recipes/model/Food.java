package com.markerud.recipes.model;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.hibernate.annotations.NaturalId;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name = "FOODS")
@Accessors(chain = true)
public class Food extends BaseEntity {

    @NaturalId
    @Column(name = "NAME")
    private String name;

    @Override
    public String toString() {
        String localPart = "name=" + name;
        return String.format(super.toString(), localPart);
    }

}
