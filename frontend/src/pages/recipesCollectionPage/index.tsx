import React from 'react';
import {useAllRecipesQuery} from '../../generated/graphql';
import RecipesCollectionPage from './RecipesCollectionPage';
import Error from '../../components/error';
import Loader from '../../components/loader';

const RecipesCollectionContainer = () => {
    const {data, error, loading} = useAllRecipesQuery();

    if (loading) {
        return <Loader/>;
    }

    if (error || !data) {
        return <Error error={error}/>;
    }

    return <RecipesCollectionPage data={data}/>;
};

export default RecipesCollectionContainer;