import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type SelectProps = WithSheet<typeof styles, {}> & {
    placeholder: string,
    options: JSX.Element[],
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}


const Select: React.FC<SelectProps> = ({placeholder, options, onChange, classes}) => {

    return (
        <select required className={classes.component} onChange={onChange}>
            <option key={0} value="" hidden>{placeholder}</option>
            {options}
        </select>
    );
};

export default withStyles(styles)(Select);