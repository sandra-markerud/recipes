import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {AllFoodsQuery} from '../../generated/graphql';

type FoodsSelectProps = WithSheet<typeof styles, {}> & {
    data: AllFoodsQuery,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const FoodsSelect: React.FC<FoodsSelectProps> = ({data, onChange, classes}) => {
    const options = data.allFoods.sort((a, b) => {
        return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
    }).map(food => {
        return <option key={food.id} value={food.id}>{food.name}</option>
    });
    return (
        <select required className={classes.component} onChange={onChange}>
            <option key={0} value="" hidden>Zutat...</option>
            {options}
        </select>
    );
};

export default withStyles(styles)(FoodsSelect);