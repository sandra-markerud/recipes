import React from 'react';
import {useRecipeByIdQuery} from '../../generated/graphql';
import RecipeDetail from './RecipeDetail';
import Error from '../shared/error';
import Loading from '../shared/loading';

interface OwnProps {
    id: number;
}

const RecipeDetailContainer = ({id}: OwnProps) => {
    const {data, error, loading} = useRecipeByIdQuery({
        variables: {id: String(id)},
    });

    if (loading) {
        return <Loading/>;
    }

    if (error || !data) {
        return <Error error={error}/>;
    }

    return <RecipeDetail data={data}/>;
};

export default RecipeDetailContainer;