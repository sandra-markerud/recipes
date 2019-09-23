import React from 'react';
import {useAllRecipesQuery} from '../../generated/graphql';
import RecipesCollectionPage from './RecipesCollectionPage';
import Error from '../../components/shared/error';
import Loading from '../../components/shared/loading';

const RecipesCollectionContainer = () => {
    const {data, error, loading} = useAllRecipesQuery();

    if (loading) {
        return <Loading/>;
    }

    if (error || !data) {
        return <Error error={error}/>;
    }

    return <RecipesCollectionPage data={data}/>;
};

export default RecipesCollectionContainer;