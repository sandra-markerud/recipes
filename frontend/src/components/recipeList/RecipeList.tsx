import * as React from 'react';
import { AllRecipesQuery } from '../../generated/graphql';
import RecipeListEntry from './recipeListEntry';
import withStyles, { WithSheet } from 'react-jss';
import styles from './styles';

type RecipeListProps = WithSheet<typeof styles, {}> & {
    data: AllRecipesQuery
}

const RecipeList: React.FC<RecipeListProps> = ( { data, classes } ) => {

    const listItems = data.allRecipes.map(currentRecipe => {
        return (
            <li key={currentRecipe.id} >
                <RecipeListEntry recipe={currentRecipe} />
            </li>
        );
    });
   return (
       <ul>{listItems}</ul>
   );
};

export default withStyles(styles)(RecipeList);