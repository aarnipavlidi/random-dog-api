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
  getChosenDog?: Maybe<Dog>;
  giveDislikesForChosenDog?: Maybe<ChosenDog>;
  giveLikesForChosenDog?: Maybe<ChosenDog>;
};


export type MutationGetChosenDogArgs = {
  breed: Scalars['String'];
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
};

export type GetAllDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDogsQuery = { __typename?: 'Query', getAllDogs?: { __typename?: 'Dogs', message?: any | null, status: string } | null };


export const GetAllDogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetAllDogsQuery, GetAllDogsQueryVariables>;