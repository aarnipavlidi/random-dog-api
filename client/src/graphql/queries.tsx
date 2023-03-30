import { gql } from '../types/graphql';

export const GET_ALL_DOGS = gql(`
  query getAllDogs {
    getAllDogs {
      message
      status
    }
  }
`);
