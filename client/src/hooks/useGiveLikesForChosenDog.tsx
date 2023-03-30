import type { GiveLikesForChosenDogMutation } from '../types/graphql/graphql';
import { FetchResult, useMutation } from '@apollo/client';
import { GIVE_LIKES_FOR_CHOSEN_DOG } from '../graphql/mutations';

interface updateLikesDatabaseProps {
  breed: string;
}

export interface useGiveLikesForChosenDogProps {
  updateLikesDatabase: ({ breed }: updateLikesDatabaseProps) => Promise<FetchResult<GiveLikesForChosenDogMutation>>;
}

const useGiveLikesForChosenDog = (): useGiveLikesForChosenDogProps => {
  const [giveLikes] = useMutation(GIVE_LIKES_FOR_CHOSEN_DOG);

  const updateLikesDatabase = async ({ breed }: updateLikesDatabaseProps): Promise<FetchResult<GiveLikesForChosenDogMutation>> => {
    try {
      const response = await giveLikes({
        variables: {
          breed: breed,
        },
      });

      return response;
    } catch (error) {
      throw error;
    }
  };

  return { updateLikesDatabase };
};

export default useGiveLikesForChosenDog;
