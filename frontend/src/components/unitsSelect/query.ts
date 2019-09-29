import gql from 'graphql-tag';

export const QUERY_ALL_UNITS = gql`
    query AllUnits {
        allUnits {
            id
            longName
            shortName
        }
    }`;