import gql from 'graphql-tag';

export const QUERY_ALL_RECIPES = gql`
    query AllRecipes {
        allRecipes {
            id
            name
        }
    }`;