import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';

type DialogProps = WithSheet<typeof styles, {}> & {
    level: 'success' | 'info' | 'warning' | 'error'
    headline: string
    message: string
}

const Dialog: React.FC<DialogProps> = ({classes, level, headline, message}) => {
    return (
        <div className={classes[level] + ' ' + classes.dialogFrame}>
            <h3>{headline}</h3>
            <p>{message}</p>
        </div>
    );
};

export default withStyles(styles)(Dialog);