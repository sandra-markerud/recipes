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
            & Pick<Unit, 'code'>
            ), food: (
            { __typename?: 'Food' }
            & Pick<Food, 'id' | 'name'>
            )
    }
        )>
}

const IngredientList: React.FC<IngredientListProps> = ({ingredients, classes}) => {

    const foo = ingredients.map(ingredient => {
        return <div key={ingredient.id}>{ingredient.quantity} {ingredient.unit.code} {ingredient.food.name}</div>
    });

    return (
        <React.Fragment>
            <p>Zutaten für x Portion(en)</p>
            {foo}
        </React.Fragment>
    );
};

export default withStyles(styles)(IngredientList);