import { crocodileImg, giraffeImg } from 'src/assets/img';
import { GameName } from 'src/types/Game.types';

interface GameInfo {
  image: string;
  title: string;
  description: string;
  howtocontrol: string;
}

type GameInfoData = {
  [K in GameName]: GameInfo;
};

export const data: GameInfoData = {
  audioChallenge: {
    image: giraffeImg,
    description: 'Прослушайте озвученное слово и подберите правильный вариант.',
    howtocontrol:
      'Используйте мышь или цифры 1-5 на клавиатуре для выбора варианта ответа',
    title: 'Audio Challenge',
  },
  sprint: {
    image: crocodileImg,
    description: 'Угадайте верный или нет перевод слова предлагает вам игра.',
    howtocontrol:
      'Используйте мышь или стрелки влево или вправо на клавиатуре для выбора варианта ответа',
    title: 'Sprint',
  },
};
