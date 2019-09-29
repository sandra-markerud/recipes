import gql from 'graphql-tag';

export const QUERY_ALL_FOODS = gql`
    query AllFoods {
        allFoods {
            id
            name
        }
    }`;