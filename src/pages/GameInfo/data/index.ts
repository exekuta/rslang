import { crocodileImg, giraffeImg } from 'src/assets/img';
import { GameName } from 'src/types/Game.types';

interface GameInfo {
  image: string;
  title: string;
  description: string;
}

type GameInfoData = {
  [K in GameName]: GameInfo;
};

export const data: GameInfoData = {
  audioChallenge: {
    image: giraffeImg,
    description:
      'Mollit voluptate nostrud cupidatat ' +
      'ipsum minim ea minim do veniam deserunt tempor.',
    title: 'Audio Challenge',
  },
  sprint: {
    image: crocodileImg,
    description:
      'Mollit voluptate nostrud cupidatat ' +
      'ipsum minim ea minim do veniam deserunt tempor.',
    title: 'Sprint',
  },
};
