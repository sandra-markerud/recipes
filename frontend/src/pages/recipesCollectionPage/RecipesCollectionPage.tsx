import * as React from 'react';
import {AllRecipesQuery} from '../../generated/graphql';
import RecipeTile from '../../components/recipeTile';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import PageTemplate from '../pageTemplate/PageTemplate';

type RecipesCollectionPageProps = WithSheet<typeof styles, {}> & {
    data: AllRecipesQuery
}

const RecipesCollectionContent: React.FC<RecipesCollectionPageProps> = ({data, classes}) => {

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

const RecipesCollectionPage: React.FC<RecipesCollectionPageProps> = (props) => {
    return (
        <PageTemplate title={'Rezepte'}>
            <RecipesCollectionContent {...props} />
        </PageTemplate>
    );
};

export default withStyles(styles)(RecipesCollectionPage);