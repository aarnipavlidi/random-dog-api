import type { GiveDislikesForChosenDogMutation } from '../types/graphql/graphql';
import { FetchResult, useMutation } from '@apollo/client';
import { GIVE_DISLIKES_FOR_CHOSEN_DOG } from '../graphql/mutations';

interface updateDislikesDatabaseProps {
  breed: string;
}

export interface useGiveDislikesForChosenDogProps {
  updateDislikesDatabase: ({ breed }: updateDislikesDatabaseProps) => Promise<FetchResult<GiveDislikesForChosenDogMutation>>;
}

const useGiveDislikesForChosenDog = (): useGiveDislikesForChosenDogProps => {
  const [giveLikes] = useMutation(GIVE_DISLIKES_FOR_CHOSEN_DOG);

  const updateDislikesDatabase = async ({ breed }: updateDislikesDatabaseProps): Promise<FetchResult<GiveDislikesForChosenDogMutation>> => {
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

  return { updateDislikesDatabase };
};

export default useGiveDislikesForChosenDog;
