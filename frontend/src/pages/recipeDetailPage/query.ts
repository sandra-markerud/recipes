import gql from 'graphql-tag';

export const QUERY_RECIPE_BY_ID = gql`
    query RecipeById ($id: ID!) {
        recipe(id: $id) {
            id
            name
            instruction
            ingredients {
                id
                quantity
                unit {
                    code
                    name
                }
                food {
                    id
                    name
                }
            }
        }
    }
`;