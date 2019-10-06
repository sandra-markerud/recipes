import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss/lib/injectSheet';
import styles from './styles';
import IngredientInputRow from '../ingredientInputRow/IngredientInputRow';

type AddIngredientsProps = WithSheet<typeof styles, {}> & {
    ingredients: Row[],
    editRow: (ingredient: Row) => void,
    addRow: (event: React.MouseEvent<HTMLButtonElement>) => void,
    deleteRow: (event: React.MouseEvent<HTMLDivElement>, ingredient: Row) => void,
};

export type Row = {
    key: number,
    quantity: string,
    unitId: string,
    foodId: string,
};

const AddIngredients: React.FC<AddIngredientsProps> = ({ingredients, editRow, addRow, deleteRow, classes}) => {
    return (
        <div className={classes.container}>
            {ingredients.map(ingredient => {
                return (
                    <IngredientInputRow key={ingredient.key} ingredient={ingredient} editRow={editRow}
                                        deleteRow={deleteRow}/>
                )
            })}
            <button className={classes.addButton} onClick={addRow}>Zutat hinzufügen</button>
        </div>
    );
};

export default withStyles(styles)(AddIngredients);