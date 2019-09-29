import * as React from 'react';
import {ChangeEvent} from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type InputProps = WithSheet<typeof styles, {}> & {
    value: any
    placeholder?: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({value, placeholder, onChange, classes}) => {
    return (
        <input type={'text'} className={classes.field} value={value} placeholder={placeholder} onChange={onChange}/>
    );
};

export default withStyles(styles)(Input);