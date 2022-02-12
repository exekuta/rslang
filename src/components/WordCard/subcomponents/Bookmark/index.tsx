import React from 'react';
import {
  useCreateUserWordMutation, useUpdateUserWordMutation,
} from 'src/services/api/user-word.api';
import { DictionaryName } from 'src/types/Dictionary.type';
import { IWord } from 'src/types/schemas';
import { Difficulty, IUserWord } from 'src/types/schemas/UserWord.type';
import * as S from './style';

type Props = {
  dictionaryName: DictionaryName;
  userWord?: IUserWord;
} & Pick<IWord, 'id'>;

const Bookmark: React.FC<Props> = ({ dictionaryName, id, userWord }) => {
  const [createUserWord] = useCreateUserWordMutation();
  const [updateUserWord] = useUpdateUserWordMutation();
  const isDifficult = userWord?.difficulty === 'difficult';

  const toggleDifficulty = () => {
    const difficulty: Difficulty = isDifficult ? 'default' : 'difficult';
    const mutation = userWord ? updateUserWord : createUserWord;
    mutation({
      wordId: id,
      difficulty,
    });
  };

  return (
    <S.Bookmark
      dictionaryName={dictionaryName}
      isActive={isDifficult}
      onClick={toggleDifficulty}
    />
  );
};

export default Bookmark;
