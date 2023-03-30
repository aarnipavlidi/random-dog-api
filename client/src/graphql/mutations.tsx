import { gql } from '../types/graphql';

export const GIVE_LIKES_FOR_CHOSEN_DOG = gql(`
  mutation giveLikesForChosenDog($breed: String!) {
    giveLikesForChosenDog(breed: $breed) {
      breed
      likes
      dislikes
    }
  }
`);

export const GIVE_DISLIKES_FOR_CHOSEN_DOG = gql(`
  mutation giveDislikesForChosenDog($breed: String!) {
    giveDislikesForChosenDog(breed: $breed) {
      breed
      likes
      dislikes
    }
  }
`);
