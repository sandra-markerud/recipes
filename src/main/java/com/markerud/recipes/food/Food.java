package com.markerud.recipes.food;

public class Food {

    private final long id;
    private final String name;

    public Food(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

}
