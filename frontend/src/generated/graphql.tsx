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

export type Query = {
   __typename?: 'Query',
  allFoods: Array<Food>,
  allRecipes: Array<Recipe>,
};

export type Recipe = {
   __typename?: 'Recipe',
  id: Scalars['ID'],
  name: Scalars['String'],
  ingredients: Array<Ingredient>,
  instruction: Scalars['String'],
};

export type Unit = {
   __typename?: 'Unit',
  code: Scalars['String'],
};
export type AllRecipesQueryVariables = {};


export type AllRecipesQuery = (
  { __typename?: 'Query' }
  & { allRecipes: Array<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'name'>
  )> }
);

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