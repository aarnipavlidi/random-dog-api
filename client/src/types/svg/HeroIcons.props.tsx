import { SVGProps } from 'react';

export type HeroIconNameType = 'hand-thumb-up' | 'hand-thumb-down';

export interface HeroIconsProps extends SVGProps<SVGSVGElement> {
  name: HeroIconNameType;
  color: string;
  variant?: 'outline' | 'solid' | 'mini';
};

export type HeroIconsArrayProps = {
  [key in HeroIconNameType]: React.FC<HeroIconsProps>;
};
