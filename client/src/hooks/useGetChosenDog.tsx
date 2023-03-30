import { useQuery } from '@apollo/client';
import { GET_CHOSEN_DOG } from '../graphql/queries';

const useGetChosenDog = (chosenBreedName: string) => {
  const { data, loading, error } = useQuery(GET_CHOSEN_DOG, {
    fetchPolicy: 'network-only',
    variables: {
      breed: chosenBreedName,
    },
  });

  return {
    currentBreedData: data,
    currentBreedLoading: loading,
    currentBreedError: error,
  };
};

export default useGetChosenDog;
