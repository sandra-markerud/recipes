import * as React from 'react';
import {RecipeByIdQuery} from '../../generated/graphql';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import Dialog from '../../components/dialog';
import Instruction from '../../components/instruction';
import IngredientCollection from '../../components/ingredientCollection';
import RecipeLogo from '../../components/recipeLogo/RecipeLogo';

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
        <div className={classes.splitPanel}>
            <div className={classes.ingredients}>
                <RecipeLogo/>
                <IngredientCollection ingredients={recipe.ingredients}/>
            </div>
            <Instruction text={recipe.instruction}/>
        </div>
    );
};

export default withStyles(styles)(RecipeDetailPage);
