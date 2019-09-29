import React, {useState} from 'react';
import styles from './styles';
import withStyles, {WithSheet} from 'react-jss';
import Input from '../input/Input';
import UnitsSelect from '../unitsSelect';
import FoodsSelect from '../foodsSelect';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type IngredientInputRowProps = WithSheet<typeof styles, {}>

const IngredientInputRow: React.FC<IngredientInputRowProps> = ({classes}) => {
    const [amount, setAmount] = useState('');
    return (
        <div className={classes.ingredientContainer}>
            <Input placeholder={'Menge...'} value={amount} onChange={event => {
                setAmount(event.target.value)
            }}/>
            <UnitsSelect/>
            <FoodsSelect/>
            <FontAwesomeIcon icon={'trash'} className={classes.icon}/>
        </div>
    );
};

export default withStyles(styles)(IngredientInputRow);