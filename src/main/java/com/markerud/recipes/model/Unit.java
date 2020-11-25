package com.markerud.recipes.model;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Accessors(chain = true)
@Table(name = "UNITS")
public class Unit extends BaseEntity {

    @Column(name = "LONG_NAME")
    private String longName;

    @Column(name = "SHORT_NAME")
    private String shortName;

    @Override
    public String toString() {
        String localPart = "code=" + longName + ", name=" + shortName;
        return String.format(super.toString(), localPart);
    }

}
