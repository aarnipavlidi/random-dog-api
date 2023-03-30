import { gql } from '../types/graphql';

export const GET_ALL_DOGS = gql(`
  query getAllDogs {
    getAllDogs {
      message
      status
    }
  }
`);

export const GET_CHOSEN_DOG = gql(`
  query getChosenDog($breed: String!) {
    getChosenDog(breed: $breed) {
      message
      status
      data {
        breed
        likes
        dislikes
      }
    }
  }
`);
