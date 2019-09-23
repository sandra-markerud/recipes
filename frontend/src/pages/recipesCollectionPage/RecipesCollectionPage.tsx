import * as React from 'react';
import {AllRecipesQuery} from '../../generated/graphql';
import RecipeTile from '../../components/recipeTile';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type RecipesCollectionPageProps = WithSheet<typeof styles, {}> & {
    data: AllRecipesQuery
}

const RecipesCollectionPage: React.FC<RecipesCollectionPageProps> = ({data, classes}) => {

    const listItems = data.allRecipes.sort((a, b) => {
        return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
    }).map(currentRecipe => {
        return (
            <RecipeTile key={currentRecipe.id} recipe={currentRecipe}/>
        );
    });

    return (
        <div className={classes.recipeTiles}>{listItems}</div>
    );
};

export default withStyles(styles)(RecipesCollectionPage);