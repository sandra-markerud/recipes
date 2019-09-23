import React from 'react';
import {useRecipeByIdQuery} from '../../generated/graphql';
import RecipeDetailPage from './RecipeDetailPage';
import Error from '../../components/error';
import Loader from '../../components/loader';

interface OwnProps {
    id: number;
}

const RecipeDetailContainer = ({id}: OwnProps) => {
    const {data, error, loading} = useRecipeByIdQuery({
        variables: {id: String(id)},
    });

    if (loading) {
        return <Loader/>;
    }

    if (error || !data) {
        return <Error error={error}/>;
    }

    return <RecipeDetailPage data={data}/>;
};

export default RecipeDetailContainer;