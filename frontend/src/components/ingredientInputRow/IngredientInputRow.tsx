import React from 'react';
import styles from './styles';
import withStyles, {WithSheet} from 'react-jss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Row} from '../addIngredients/AddIngredients';

type IngredientInputRowProps = WithSheet<typeof styles, {}> & {
    ingredient: Row,
    editRow: (ingredient: Row) => void,
    deleteRow: (event: React.MouseEvent<HTMLDivElement>, ingredient: Row) => void,
}

const IngredientInputRow: React.FC<IngredientInputRowProps> = ({ingredient, editRow, deleteRow, classes}) => {

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, ingredient: Row) => {
        const updatedRow: Row = {...ingredient};
        updatedRow.quantity = event.target.value;
        editRow(updatedRow);
    };

    const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>, ingredient: Row) => {
        const updatedRow: Row = {...ingredient};
        updatedRow.unitId = event.target.value;
        editRow(updatedRow);
    };

    const handleFoodChange = (event: React.ChangeEvent<HTMLSelectElement>, ingredient: Row) => {
        const updatedRow: Row = {...ingredient};
        updatedRow.foodId = event.target.value;
        editRow(updatedRow);
    };

    return (
        <React.Fragment>
            <input type="text" className={classes.component}
                   value={ingredient.quantity}
                   placeholder={'Menge...'}
                   onChange={event => handleQuantityChange(event, ingredient)}/>
            <select required className={classes.component}
                    onChange={event => handleUnitChange(event, ingredient)}>
                <option key={'0'} value="" hidden>Einheit...</option>
                <option key={'1'} value={'1002'}>{'Esslöffel'}</option>
                <option key={'2'} value={'1003'}>{'Teelöffel'}</option>
                <option key={'3'} value={'1000'}>{'Gramm'}</option>
            </select>
            <select required className={classes.component}
                    onChange={event => handleFoodChange(event, ingredient)}>
                <option key={'0'} value="" hidden>Zutat...</option>
                <option key={'1'} value={'2001'}>{'Wachholderschinken'}</option>
                <option key={'2'} value={'2005'}>{'Nudeln'}</option>
                <option key={'3'} value={'2008'}>{'Basilikum, getrocknet'}</option>
            </select>
            <div className={classes.icon} onClick={event => deleteRow(event, ingredient)}><FontAwesomeIcon
                icon={'trash'}/></div>
        </React.Fragment>
    )
};

export default withStyles(styles)(IngredientInputRow);