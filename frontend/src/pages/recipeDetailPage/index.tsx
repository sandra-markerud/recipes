import React from 'react';
import {useRecipeByIdQuery} from '../../generated/graphql';
import RecipeDetailPage from './RecipeDetailPage';
import Error from '../../components/error';
import Loader from '../../components/loader';
import PageTemplate from '../pageTemplate/PageTemplate';

interface OwnProps {
    id: number;
}

const RecipeDetailContainer = ({id}: OwnProps) => {
    const {data, error, loading} = useRecipeByIdQuery({
        variables: {id: String(id)},
    });
    let componentToReturn;
    let title: string = 'Rezept';

    if (loading || !data) {
        componentToReturn = <Loader/>;
    }

    if (error) {
        componentToReturn = <Error error={error}/>;
    }

    if (data) {
        title = data.recipe ? data.recipe.name : 'Rezept nicht gefunden';
        componentToReturn = <RecipeDetailPage data={data}/>;
    }

    return (
        <PageTemplate title={title}>
            {componentToReturn}
        </PageTemplate>
    );
};

export default RecipeDetailContainer;