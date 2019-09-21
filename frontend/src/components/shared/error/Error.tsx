import * as React from 'react';
import {ApolloError} from 'apollo-boost';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import Dialog from "../dialog/Dialog";

type ErrorProps = WithSheet<typeof styles, {}> & {
    error: ApolloError | undefined
}

const Error: React.FC<ErrorProps> = ({error}) => {

    // TODO: Hier könnte der GraphQL Fehler ausgewertet und in generische Fehlermeldungen umgewandelt werden
    const errorMessage: string = ((error) ? error.message : '');

    return (
        <Dialog level={"error"} headline={'Oh nein, etwas ist schief gelaufen:'} message={errorMessage}/>
    );
};

export default withStyles(styles)(Error);