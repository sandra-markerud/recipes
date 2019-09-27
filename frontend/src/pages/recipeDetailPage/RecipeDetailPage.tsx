import * as React from 'react';
import {RecipeByIdQuery} from '../../generated/graphql';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import Dialog from '../../components/dialog';
import Instruction from '../../components/instruction';
import IngredientCollection from '../../components/ingredientCollection';
import RecipeLogo from '../../components/recipeLogo/RecipeLogo';
import PageTemplate from '../pageTemplate/PageTemplate';

type RecipeDetailPageProps = WithSheet<typeof styles, {}> & {
    data: RecipeByIdQuery
}

const RecipeDetailContent: React.FC<RecipeDetailPageProps> = ({data, classes}) => {
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

const RecipeDetailPage: React.FC<RecipeDetailPageProps> = (props) => {
    const title: string = props.data.recipe ? props.data.recipe.name : 'Rezept nicht gefunden';
    return (
        <PageTemplate title={title}>
            <RecipeDetailContent {...props}/>
        </PageTemplate>
    );
};

export default withStyles(styles)(RecipeDetailPage);
