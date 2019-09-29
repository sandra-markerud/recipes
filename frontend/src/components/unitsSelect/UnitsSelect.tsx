import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {AllUnitsQuery} from '../../generated/graphql';

type UnitsSelectProps = WithSheet<typeof styles, {}> & {
    data: AllUnitsQuery
}

const UnitsSelect: React.FC<UnitsSelectProps> = ({data, classes}) => {
    const options = data.allUnits.sort((a, b) => {
        return a.longName === b.longName ? 0 : a.longName < b.longName ? -1 : 1;
    }).map(unit => {
        return <option key={unit.id} value={unit.id}>label={unit.longName}</option>
    });
    return (
        <select required className={classes.component}>
            <option key={0} value="" hidden>Einheit...</option>
            {options}
        </select>
    );
};

export default withStyles(styles)(UnitsSelect);