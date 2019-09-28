import React from 'react';
import {useAllRecipesQuery} from '../../generated/graphql';
import RecipesCollectionPage from './RecipesCollectionPage';
import Error from '../../components/error';
import Loader from '../../components/loader';
import PageTemplate from '../pageTemplate/PageTemplate';

const RecipesCollectionContainer = () => {
    const {data, error, loading} = useAllRecipesQuery();
    let componentToReturn;

    if (loading || !data) {
        componentToReturn = <Loader/>;
    }

    if (error) {
        componentToReturn = <Error error={error}/>;
    }

    if (data) {
        componentToReturn = <RecipesCollectionPage data={data}/>;
    }
    return (
        <PageTemplate title={'Rezepte'}>
            {componentToReturn}
        </PageTemplate>
    );

};

export default RecipesCollectionContainer;