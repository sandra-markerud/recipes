import * as React from 'react';
import { ApolloError } from 'apollo-boost';
import withStyles, { WithSheet } from 'react-jss';
import styles from './styles';

type ErrorProps = WithSheet<typeof styles, {}> & {
    error: ApolloError | undefined
}

const Error: React.FC<ErrorProps> = ( { error } ) => {
    return (
        <React.Fragment>
            <h3>Oh nein, etwas ist schief gelaufen:</h3>
            {error && (
                <p>{error.message}</p>
            )}
        </React.Fragment>
    );
};

export default withStyles(styles)(Error);