package com.markerud.recipes.recipe;

import com.markerud.recipes.jpa.BaseEntity;
import org.hibernate.annotations.NaturalId;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "UNITS")
public class Unit extends BaseEntity {

    @NaturalId
    @Column(name = "CODE")
    private String code;

    @Column(name = "NAME")
    private String name;

    public String getCode() {
        return code;
    }

    public Unit setCode(String code) {
        this.code = code;
        return this;
    }

    public String getName() {
        return name;
    }

    public Unit setName(String name) {
        this.name = name;
        return this;
    }

    @Override
    public String toString() {
        String localPart = "code=" + code + ", name=" + name;
        return String.format(super.toString(), localPart);
    }

}
