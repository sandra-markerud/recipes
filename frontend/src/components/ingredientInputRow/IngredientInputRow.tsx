import React from 'react';
import styles from './styles';
import withStyles, {WithSheet} from 'react-jss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Row} from '../addIngredients/AddIngredients';
import UnitsSelect from '../unitsSelect';
import FoodsSelect from '../foodsSelect';
import Textfield from '../form/textfield';

type IngredientInputRowProps = WithSheet<typeof styles, {}> & {
    ingredient: Row,
    editRow: (ingredient: Row) => void,
    deleteRow: (event: React.MouseEvent<HTMLDivElement>, ingredient: Row) => void,
}

const IngredientInputRow: React.FC<IngredientInputRowProps> = ({ingredient, editRow, deleteRow, classes}) => {

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedRow: Row = {...ingredient};
        updatedRow.quantity = event.target.value;
        editRow(updatedRow);
    };

    const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const updatedRow: Row = {...ingredient};
        updatedRow.unitId = event.target.value;
        editRow(updatedRow);
    };

    const handleFoodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const updatedRow: Row = {...ingredient};
        updatedRow.foodId = event.target.value;
        editRow(updatedRow);
    };

    return (
        <React.Fragment>
            <Textfield value={ingredient.quantity} placeholder={'Menge...'} onChange={handleQuantityChange}/>
            <UnitsSelect onChange={handleUnitChange}/>
            <FoodsSelect onChange={handleFoodChange}/>
            <div className={classes.icon} onClick={event => deleteRow(event, ingredient)}><FontAwesomeIcon
                icon={'trash'}/></div>
        </React.Fragment>
    )
};

export default withStyles(styles)(IngredientInputRow);