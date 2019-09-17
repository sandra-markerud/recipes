import React from 'react';
import { useAllRecipesQuery } from "../../generated/graphql";
import RecipeList from "./RecipeList";

const RecipeListContainer = () => {
    const { data, error, loading } = useAllRecipesQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <RecipeList data={ data } />;
};

export default RecipeListContainer;