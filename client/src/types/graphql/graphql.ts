/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSONObject: any;
};

export type ChosenDog = {
  __typename?: 'ChosenDog';
  breed?: Maybe<Scalars['String']>;
  dislikes?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};

export type Dog = {
  __typename?: 'Dog';
  data: ChosenDog;
  message: Scalars['String'];
  status: Scalars['String'];
};

export type Dogs = {
  __typename?: 'Dogs';
  message?: Maybe<Scalars['JSONObject']>;
  status: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  giveDislikesForChosenDog?: Maybe<ChosenDog>;
  giveLikesForChosenDog?: Maybe<ChosenDog>;
};


export type MutationGiveDislikesForChosenDogArgs = {
  breed: Scalars['String'];
};


export type MutationGiveLikesForChosenDogArgs = {
  breed: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllDogs?: Maybe<Dogs>;
  getChosenDog?: Maybe<Dog>;
};


export type QueryGetChosenDogArgs = {
  breed: Scalars['String'];
};

export type GiveLikesForChosenDogMutationVariables = Exact<{
  breed: Scalars['String'];
}>;


export type GiveLikesForChosenDogMutation = { __typename?: 'Mutation', giveLikesForChosenDog?: { __typename?: 'ChosenDog', breed?: string | null, likes?: number | null, dislikes?: number | null } | null };

export type GiveDislikesForChosenDogMutationVariables = Exact<{
  breed: Scalars['String'];
}>;


export type GiveDislikesForChosenDogMutation = { __typename?: 'Mutation', giveDislikesForChosenDog?: { __typename?: 'ChosenDog', breed?: string | null, likes?: number | null, dislikes?: number | null } | null };

export type GetAllDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDogsQuery = { __typename?: 'Query', getAllDogs?: { __typename?: 'Dogs', message?: any | null, status: string } | null };

export type GetChosenDogQueryVariables = Exact<{
  breed: Scalars['String'];
}>;


export type GetChosenDogQuery = { __typename?: 'Query', getChosenDog?: { __typename?: 'Dog', message: string, status: string, data: { __typename?: 'ChosenDog', breed?: string | null, likes?: number | null, dislikes?: number | null } } | null };


export const GiveLikesForChosenDogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"giveLikesForChosenDog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"breed"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"giveLikesForChosenDog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"breed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"breed"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breed"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}}]}}]}}]} as unknown as DocumentNode<GiveLikesForChosenDogMutation, GiveLikesForChosenDogMutationVariables>;
export const GiveDislikesForChosenDogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"giveDislikesForChosenDog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"breed"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"giveDislikesForChosenDog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"breed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"breed"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breed"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}}]}}]}}]} as unknown as DocumentNode<GiveDislikesForChosenDogMutation, GiveDislikesForChosenDogMutationVariables>;
export const GetAllDogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetAllDogsQuery, GetAllDogsQueryVariables>;
export const GetChosenDogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getChosenDog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"breed"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getChosenDog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"breed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"breed"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breed"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}}]}}]}}]}}]} as unknown as DocumentNode<GetChosenDogQuery, GetChosenDogQueryVariables>;