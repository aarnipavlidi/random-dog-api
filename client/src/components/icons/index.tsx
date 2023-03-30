import { HeroIconsProps, HeroIconsArrayProps } from '../../types/svg/HeroIcons.props';

import HandThumbDown from '../svg/HeroIcons/HandThumbDown';
import HandThumbUp from '../svg/HeroIcons/HandThumbUp';

const HeroIcons: React.FC<HeroIconsProps> = ({ variant = 'outline', name, ...props }) => {

  const HeroIconsArray: HeroIconsArrayProps = {
    'hand-thumb-down': HandThumbDown,
    'hand-thumb-up': HandThumbUp,
  };

  const HeroIcon = HeroIconsArray[name];

  return (
    <HeroIcon
      name={name}
      variant={variant}
      {...props}
    />
  );
};

export default HeroIcons;
