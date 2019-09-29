package com.markerud.recipes.recipe;

import com.markerud.recipes.jpa.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "UNITS")
public class Unit extends BaseEntity {

    @Column(name = "LONG_NAME")
    private String longName;

    @Column(name = "SHORT_NAME")
    private String shortName;

    public String getLongName() {
        return longName;
    }

    public Unit setLongName(String longName) {
        this.longName = longName;
        return this;
    }

    public String getShortName() {
        return shortName;
    }

    public Unit setShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }

    @Override
    public String toString() {
        String localPart = "code=" + longName + ", name=" + shortName;
        return String.format(super.toString(), localPart);
    }

}
