import * as React from 'react';
import {ChangeEvent} from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type InputProps = WithSheet<typeof styles, {}> & {
    id?: string,
    value: any
    placeholder?: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Textfield: React.FC<InputProps> = ({id, value, placeholder, onChange, classes}) => {
    return (
        <input id={id} type={'text'} className={classes.textfield} value={value} placeholder={placeholder}
               onChange={onChange}/>
    );
};

export default withStyles(styles)(Textfield);