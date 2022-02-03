import { IWord } from '../schemas';
import { IWordsQueryData } from './Word.types';

export interface IGetAggregatedWordsResponse {
  paginatedResults: IWord[];
  totalCount: {
    count: number;
  }[];
}

export interface IGetAggregatedWordsQueryData extends IWordsQueryData {
  wordsPerPage?: number;
  filter?: string;
}
