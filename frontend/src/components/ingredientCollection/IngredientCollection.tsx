import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {Food, Ingredient, Unit} from '../../generated/graphql';

type IngredientListProps = WithSheet<typeof styles, {}> & {
    ingredients: Array<(
        { __typename?: 'Ingredient' }
        & Pick<Ingredient, 'id' | 'quantity'>
        & {
        unit: (
            { __typename?: 'Unit' }
            & Pick<Unit, 'code' | 'name'>
            ), food: (
            { __typename?: 'Food' }
            & Pick<Food, 'id' | 'name'>
            )
    }
        )>
}

const IngredientCollection: React.FC<IngredientListProps> = ({ingredients, classes}) => {

    const recipeTableData = ingredients.map(ingredient => {
        return (
            <li key={ingredient.id} className={classes.ingredientContainer}>
                <div className={classes.quantity}>{ingredient.quantity} {ingredient.unit.name}</div>
                <div className={classes.food}>{ingredient.food.name}</div>
            </li>
        );
    });

    return (
        <section>
            <h4>Zutaten für x Portion(en)</h4>
            <ol className={classes.ingredientCollection}>
                {recipeTableData}
            </ol>
        </section>
    );
};

export default withStyles(styles)(IngredientCollection);