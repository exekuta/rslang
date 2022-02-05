import { IWord } from '../schemas';
import { IWordsQueryData } from './Word.types';

export interface IGetAggregatedWordsResponse {
  paginatedResults: (Omit<IWord, 'id'> & { _id: string })[];
  totalCount: {
    count: number;
  }[];
}

export interface IGetAggregatedWordsQueryData extends IWordsQueryData {
  wordsPerPage?: number;
  filter?: string;
}
