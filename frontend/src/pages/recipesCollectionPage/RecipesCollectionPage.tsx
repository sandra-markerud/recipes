import * as React from 'react';
import {AllRecipesQuery} from '../../generated/graphql';
import RecipeListEntry from '../../components/recipeList/recipeListEntry';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type RecipeListProps = WithSheet<typeof styles, {}> & {
    data: AllRecipesQuery
}

const RecipesCollectionPage: React.FC<RecipeListProps> = ({data, classes}) => {

    const listItems = data.allRecipes.map(currentRecipe => {
        return (
            <RecipeListEntry key={currentRecipe.id} recipe={currentRecipe}/>
        );
    });

    return (
        <div className={classes.recipeTiles}>{listItems}</div>
    );
};

export default withStyles(styles)(RecipesCollectionPage);