import * as React from 'react';
import {RecipeByIdQuery} from '../../generated/graphql';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import Dialog from '../../components/shared/dialog';

type RecipeDetailPageProps = WithSheet<typeof styles, {}> & {
    data: RecipeByIdQuery
}

const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({data, classes}) => {
    const recipe = data.recipe;
    if (!recipe) {
        return (
            <Dialog level={'warning'} headline={'Warnung'} message={'Dieses Rezept existiert nicht'}/>
        );
    }
    return (
        <React.Fragment>
            <h1>{recipe.name}</h1>
            <div>Hier kommt gleich das ganze Rezept hin:</div>
        </React.Fragment>
    );
};

export default withStyles(styles)(RecipeDetailPage);
