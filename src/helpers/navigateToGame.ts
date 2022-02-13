import { generatePath, NavigateFunction } from 'react-router-dom';
import { routes } from 'src/config';
import { DictionaryName } from 'src/types/Dictionary.type';
import { GameName } from 'src/types/Game.types';

export const navigateToGame = ({
  navigate,
  gameName,
  dictionaryName,
}: {
  navigate: NavigateFunction;
  gameName: GameName;
  dictionaryName: DictionaryName;
}) => {
  const pathPattern =
    gameName === GameName.SPRINT
      ? routes.sprintGame.fullPath
      : routes.audioChallengeGame.fullPath;

  const path = generatePath(pathPattern, {
    dictionaryName: String(dictionaryName),
  });

  navigate(path);
};
