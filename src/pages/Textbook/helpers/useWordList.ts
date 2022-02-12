import { useEffect } from 'react';
import { useTypedSelector } from 'src/hooks/redux';
import { useAuth } from 'src/hooks/useAuth';
import {
  useLazyGetUserAggregatedWordsQuery,
} from 'src/services/api/aggregated-words.api';
import { useLazyGetWordsQuery } from 'src/services/api/words.api';
import { selectTextbook } from 'src/store/reducers/textbook';
import { AdditionalGroupName } from 'src/types/Dictionary.type';

export const useGetWordList = () => {
  const { group, page } = useTypedSelector(selectTextbook);
  const { isAuthorized } = useAuth();
  const [getAggregatedWords, getAggregatedWordsReturn] =
    useLazyGetUserAggregatedWordsQuery();
  const [getWords, getWordsReturn] = useLazyGetWordsQuery();
  const query = isAuthorized ? getAggregatedWords : getWords;
  useEffect(() => {
    if (group !== AdditionalGroupName.DIFFICULT_WORDS) {
      query({
        group,
        page,
      });
    } else if (query === getAggregatedWords) {
      query({
        filter: '{"$and":[{"userWord.difficulty":"difficult"}]}',
        page,
      });
    }
  }, [getAggregatedWords, group, page, query]);
  return isAuthorized ? getAggregatedWordsReturn : getWordsReturn;
};
