package com.markerud.recipes.ingredient;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.NaturalId;

import com.markerud.recipes.jpa.BaseEntity;

@Entity
@Table(name = "UNITS")
public class Unit extends BaseEntity {

    @NaturalId
    @Column(name = "CODE")
    private String code;

    public String getCode() {
        return code;
    }

    public Unit setCode(String code) {
        this.code = code;
        return this;
    }

    @Override
    public String toString() {
        String localPart = "code=" + code;
        return String.format(super.toString(), localPart);
    }

}
