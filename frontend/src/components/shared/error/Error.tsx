// @ts-ignore
import React from 'react';
import { ApolloError } from 'apollo-boost';

interface ErrorProps {
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

export default Error;