import type { useGiveLikesForChosenDogProps } from '../../hooks/useGiveLikesForChosenDog';
import type { useGiveDislikesForChosenDogProps } from '../../hooks/useGiveDislikesForChosenDog';
import { useState } from 'react';

import HeroIcons from '../icons';
import Heading from '../heading';
import Value from './value';

interface LikesProps {
  currentBreed: string | null | undefined;
  currentLikes: number | null | undefined;
  updateLikesDatabase: useGiveLikesForChosenDogProps['updateLikesDatabase'];
  currentDislikes: number | null | undefined;
  updateDislikesDatabase: useGiveDislikesForChosenDogProps['updateDislikesDatabase'];
}

const Likes: React.FC<LikesProps> = (props) => {

  const [imageVoted, setImageVoted] = useState<boolean>(false);

  const updateLikes = async () => {
    if (props.currentBreed) {
      const response = await props.updateLikesDatabase({ breed: props.currentBreed });
      setImageVoted(true);

      return response;
    }

    return null;
  };

  const updateDislikes = async () => {
    if (props.currentBreed) {
      const response = await props.updateDislikesDatabase({ breed: props.currentBreed });
      setImageVoted(true);

      return response;
    }

    return null;
  };

  return (

    <div className="flex justify-evenly flex-row mt-10">
      {
        !imageVoted && <>
          <div className="h-12 flex">
            <HeroIcons
              name="hand-thumb-up"
              color="#021738"
              style={{ height: '100%' }}
              onClick={updateLikes}
            />
            <Value totalLikes={props.currentLikes || 0} />
          </div>
          <div className="h-12 flex">
            <HeroIcons
              name="hand-thumb-down"
              color="#021738"
              style={{ height: '100%' }}
              onClick={updateDislikes}
            />
            <Value totalLikes={props.currentDislikes || 0} />
          </div>
        </>
      }
      {
        imageVoted && <>
          <Heading
            value="Thank you for voting the picture! :)"
            tag="h2"
            headingStyle="text-3xl"
          />
        </>
      }
    </div>

  );
};

export default Likes;
