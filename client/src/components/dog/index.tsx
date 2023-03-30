import { useParams } from 'react-router-dom';

import Image from '../image';

import useGetChosenDog from '../../hooks/useGetChosenDog';

const Dog: React.FC = () => {
  const params = useParams();
  const getCurrentID = params.id ? params.id.toLowerCase() : '';

  const { currentBreedData, currentBreedLoading, currentBreedError } = useGetChosenDog(getCurrentID);

  return (
    <div className="container mx-auto px-5 py-10">
      {
        currentBreedLoading && <>
          <h2 className="font-pier-sans text-2xl">Fetching random image...</h2>
        </>
      }
      {
        currentBreedData?.getChosenDog && <>
          <h2 className="font-pier-sans text-2xl">{`Current breed: ${currentBreedData.getChosenDog.data.breed}`}</h2>
          <Image
            imageSource={currentBreedData.getChosenDog.message}
            wrapperStyle="mt-10"
          />
        </>
      }
      {
        currentBreedError && <>
          <h2 className="font-pier-sans text-2xl">{currentBreedError.message}</h2>
        </>
      }
    </div>
  );
};

export default Dog;
