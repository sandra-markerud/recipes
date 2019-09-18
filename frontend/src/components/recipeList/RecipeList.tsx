import React from 'react';
import { AllRecipesQuery } from '../../generated/graphql';
import RecipeListEntry from './recipeListEntry/RecipeListEntry';

interface RecipeListProps {
    data: AllRecipesQuery
}

const RecipeList: React.FC<RecipeListProps> = ( { data } ) => {

    const listItems = data.allRecipes.map(currentRecipe => {
        return (
            <li key={currentRecipe.id}>
                <RecipeListEntry recipe={currentRecipe} />
            </li>
        );
    });
   return (
       <ul>{listItems}</ul>
   );
};

export default RecipeList;