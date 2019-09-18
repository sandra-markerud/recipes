import * as React from 'react';
import withStyles, { WithSheet } from 'react-jss';
import styles from './styles';

const Loading: React.FC<WithSheet<typeof styles>> = () => {
    return (
        <h3>Loading...</h3>
    );
};

export default withStyles(styles)(Loading);