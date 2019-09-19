package com.markerud.recipes.graphql;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public final class VariablesUtil {

    private VariablesUtil() {

    }

    public static ObjectNode createVariables() {
        return new ObjectMapper().createObjectNode();
    }

}
