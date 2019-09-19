import React from 'react';
import { useAllRecipesQuery } from '../../generated/graphql';
import RecipeList from './RecipeList';
import Error from '../shared/error';
import Loading from '../shared/loading';

const RecipeListContainer = () => {
    const { data, error, loading } = useAllRecipesQuery();

    if (loading) {
        return <Loading />;
    }

    if (error || !data) {
        return <Error error={error} />;
    }

    return <RecipeList data={ data } />;
};

export default RecipeListContainer;