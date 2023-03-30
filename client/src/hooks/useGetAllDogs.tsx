import { useLazyQuery } from '@apollo/client';
import { GET_ALL_DOGS } from '../graphql/queries';

const useGetAllDogs = () => {
  const [getDogs, { data, loading, error }] = useLazyQuery(GET_ALL_DOGS);

  return [getDogs, data, loading, error];
};

export default useGetAllDogs;
