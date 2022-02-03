import { IWord } from '../schemas';
import { IUserWord } from '../schemas/UserWord.type';

export interface IWordList {
  words: IWord[] & {
    userWord?: IUserWord
  };
  pagesCount: number;
}
