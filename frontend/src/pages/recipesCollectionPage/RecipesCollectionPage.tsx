import * as React from 'react';
import {AllRecipesQuery} from '../../generated/graphql';
import RecipeTile from '../../components/recipeTile';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type RecipesCollectionPageProps = WithSheet<typeof styles, {}> & {
    data: AllRecipesQuery
}

const RecipesCollectionPage: React.FC<RecipesCollectionPageProps> = ({data, classes}) => {

    const listItems = data.allRecipes.map(currentRecipe => {
        return (
            <RecipeTile key={currentRecipe.id} recipe={currentRecipe}/>
        );
    });

    return (
        <div className={classes.recipeTiles}>{listItems}</div>
    );
};

export default withStyles(styles)(RecipesCollectionPage);