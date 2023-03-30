import { useParams } from 'react-router-dom';

import Heading from '../heading';
import Image from '../image';
import Likes from '../likes';

import useGetChosenDog from '../../hooks/useGetChosenDog';
import useGiveLikesForChosenDog from '../../hooks/useGiveLikesForChosenDog';
import useGiveDislikesForChosenDog from '../../hooks/useGiveDislikesForChosenDog';

const Dog: React.FC = () => {
  const params = useParams();
  const getCurrentID = params.id ? params.id.toLowerCase() : '';

  const { currentBreedData, currentBreedLoading, currentBreedError } = useGetChosenDog(getCurrentID);
  const { updateLikesDatabase } = useGiveLikesForChosenDog();
  const { updateDislikesDatabase } = useGiveDislikesForChosenDog();

  return (
    <div className="container mx-auto px-5 py-10">
      {
        currentBreedLoading && <>
          <Heading
            value='Fetching random image...'
            tag='h1'
            headingStyle='font-pier-sans text-2xl'
          />
        </>
      }
      {
        currentBreedData?.getChosenDog && <>
          <Heading
            value={`Current breed: ${currentBreedData.getChosenDog.data.breed}`}
            tag='h1'
            headingStyle='font-pier-sans text-2xl'
          />
          <Image
            imageSource={currentBreedData.getChosenDog.message}
            wrapperStyle="mt-10"
          />
          <Likes
            currentBreed={currentBreedData.getChosenDog.data.breed}
            currentLikes={currentBreedData.getChosenDog.data.likes}
            updateLikesDatabase={updateLikesDatabase}
            currentDislikes={currentBreedData.getChosenDog.data.dislikes}
            updateDislikesDatabase={updateDislikesDatabase}
          />
        </>
      }
      {
        currentBreedError && <>
          <Heading
            value={currentBreedError.message}
            tag='h1'
            headingStyle='font-pier-sans text-2xl'
          />
        </>
      }
    </div>
  );
};

export default Dog;
