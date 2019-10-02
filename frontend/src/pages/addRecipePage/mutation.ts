import gql from 'graphql-tag';

export const MUTATION_CREATE_RECIPE = gql`
    mutation CreateRecipe($name: String!, $instruction: String!, $ingredients: [CreateIngredientInput!]!) {
        createRecipe(input: { name: $name, instruction: $instruction, ingredients: $ingredients }) {
            recipe {
                id
                name
                instruction
                ingredients {
                    quantity
                    unit {
                        longName
                        shortName
                    }
                    food {
                        name
                    }
                }
            }
        }
    }
`;