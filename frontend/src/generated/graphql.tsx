import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};


export type CreateFoodInput = {
  name: Scalars['String'],
};

export type CreateFoodPayload = {
   __typename?: 'CreateFoodPayload',
  food: Food,
};

export type CreateRecipeInput = {
  name: Scalars['String'],
  instruction: Scalars['String'],
};

export type CreateRecipePayload = {
   __typename?: 'CreateRecipePayload',
  recipe: Recipe,
};

export type CreateUnitInput = {
  code: Scalars['String'],
  name: Scalars['String'],
};

export type CreateUnitPayload = {
   __typename?: 'CreateUnitPayload',
  unit: Unit,
};

export type Food = {
   __typename?: 'Food',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type Ingredient = {
   __typename?: 'Ingredient',
  id: Scalars['ID'],
  quantity: Scalars['Float'],
  unit: Unit,
  food: Food,
  recipe: Recipe,
};

export type Mutation = {
   __typename?: 'Mutation',
  createFood: CreateFoodPayload,
  createRecipe: CreateRecipePayload,
  createUnit: CreateUnitPayload,
};


export type MutationCreateFoodArgs = {
  input: CreateFoodInput
};


export type MutationCreateRecipeArgs = {
  input: CreateRecipeInput
};


export type MutationCreateUnitArgs = {
  input: CreateUnitInput
};

export type Query = {
   __typename?: 'Query',
  allFoods: Array<Food>,
  allRecipes: Array<Recipe>,
  recipe?: Maybe<Recipe>,
  allUnits: Array<Unit>,
};


export type QueryRecipeArgs = {
  id: Scalars['ID']
};

export type Recipe = {
   __typename?: 'Recipe',
  id: Scalars['ID'],
  name: Scalars['String'],
  instruction: Scalars['String'],
  ingredients: Array<Ingredient>,
};

export type Unit = {
   __typename?: 'Unit',
  id: Scalars['ID'],
  code: Scalars['String'],
  name: Scalars['String'],
};
export type RecipeByIdQueryVariables = {
  id: Scalars['ID']
};


export type RecipeByIdQuery = (
  { __typename?: 'Query' }
  & { recipe: Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'name' | 'instruction'>
    & { ingredients: Array<(
      { __typename?: 'Ingredient' }
      & Pick<Ingredient, 'id' | 'quantity'>
      & { unit: (
        { __typename?: 'Unit' }
        & Pick<Unit, 'code' | 'name'>
      ), food: (
        { __typename?: 'Food' }
        & Pick<Food, 'id' | 'name'>
      ) }
    )> }
  )> }
);

export type AllRecipesQueryVariables = {};


export type AllRecipesQuery = (
  { __typename?: 'Query' }
  & { allRecipes: Array<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'name'>
  )> }
);

export const RecipeByIdDocument = gql`
    query RecipeById($id: ID!) {
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
export type RecipeByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RecipeByIdQuery, RecipeByIdQueryVariables>, 'query'> & ({ variables: RecipeByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const RecipeByIdComponent = (props: RecipeByIdComponentProps) => (
      <ApolloReactComponents.Query<RecipeByIdQuery, RecipeByIdQueryVariables> query={RecipeByIdDocument} {...props} />
    );
    
export type RecipeByIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<RecipeByIdQuery, RecipeByIdQueryVariables> & TChildProps;
export function withRecipeById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RecipeByIdQuery,
  RecipeByIdQueryVariables,
  RecipeByIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RecipeByIdQuery, RecipeByIdQueryVariables, RecipeByIdProps<TChildProps>>(RecipeByIdDocument, {
      alias: 'recipeById',
      ...operationOptions
    });
};

    export function useRecipeByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RecipeByIdQuery, RecipeByIdQueryVariables>) {
      return ApolloReactHooks.useQuery<RecipeByIdQuery, RecipeByIdQueryVariables>(RecipeByIdDocument, baseOptions);
    }
      export function useRecipeByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecipeByIdQuery, RecipeByIdQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<RecipeByIdQuery, RecipeByIdQueryVariables>(RecipeByIdDocument, baseOptions);
      }
      
export type RecipeByIdQueryHookResult = ReturnType<typeof useRecipeByIdQuery>;
export type RecipeByIdQueryResult = ApolloReactCommon.QueryResult<RecipeByIdQuery, RecipeByIdQueryVariables>;
export const AllRecipesDocument = gql`
    query AllRecipes {
  allRecipes {
    id
    name
  }
}
    `;
export type AllRecipesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllRecipesQuery, AllRecipesQueryVariables>, 'query'>;

    export const AllRecipesComponent = (props: AllRecipesComponentProps) => (
      <ApolloReactComponents.Query<AllRecipesQuery, AllRecipesQueryVariables> query={AllRecipesDocument} {...props} />
    );
    
export type AllRecipesProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllRecipesQuery, AllRecipesQueryVariables> & TChildProps;
export function withAllRecipes<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllRecipesQuery,
  AllRecipesQueryVariables,
  AllRecipesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllRecipesQuery, AllRecipesQueryVariables, AllRecipesProps<TChildProps>>(AllRecipesDocument, {
      alias: 'allRecipes',
      ...operationOptions
    });
};

    export function useAllRecipesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllRecipesQuery, AllRecipesQueryVariables>) {
      return ApolloReactHooks.useQuery<AllRecipesQuery, AllRecipesQueryVariables>(AllRecipesDocument, baseOptions);
    }
      export function useAllRecipesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllRecipesQuery, AllRecipesQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<AllRecipesQuery, AllRecipesQueryVariables>(AllRecipesDocument, baseOptions);
      }
      
export type AllRecipesQueryHookResult = ReturnType<typeof useAllRecipesQuery>;
export type AllRecipesQueryResult = ApolloReactCommon.QueryResult<AllRecipesQuery, AllRecipesQueryVariables>;