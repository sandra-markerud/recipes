import React from 'react';
import { AllRecipesQuery } from '../../generated/graphql';

interface RecipeListProps {
    data: AllRecipesQuery
}

const RecipeList: React.FC<RecipeListProps> = ( { data } ) => {

    const listItems = data.allRecipes.map(currentRecipe => {
        return <li key={currentRecipe.id}>{currentRecipe.name}</li>
    });

   return (
       <ul>{listItems}</ul>
   );
};

export default RecipeList;