import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type SelectProps = WithSheet<typeof styles, {}> & {
    placeholder: string,
    options: JSX.Element[],
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}


const Select: React.FC<SelectProps> = ({placeholder, options, onChange, classes}) => {
    return (
        <div className={classes.wrapper}>
            <select required className={classes.component} onChange={onChange}>
                <option key={0} value="" hidden>{placeholder}</option>
                {options}
            </select>
            <FontAwesomeIcon icon={'angle-down'} className={classes.icon}/>
        </div>
    );
};

export default withStyles(styles)(Select);