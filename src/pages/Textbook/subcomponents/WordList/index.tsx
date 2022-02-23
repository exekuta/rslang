import React, { useCallback, useEffect } from 'react';
import { Loader } from 'src/components/common';
import { Flex, Page } from 'src/components/core';
import Pagination from 'src/components/Pagination';
import WordCard from 'src/components/WordCard';
import { useTypedDispatch, useTypedSelector } from 'src/hooks';
import { selectTextbook, setPage } from 'src/store/reducers/textbook';
import { IWordList } from 'src/types/api/WordList.type';
import { IWord } from 'src/types/schemas';

interface Props {
  data?: IWordList;
  isLoading: boolean;
}

const WordList: React.FC<Props> = ({ data, isLoading }) => {
  const dispatch = useTypedDispatch();
  const { page } = useTypedSelector(selectTextbook);

  const setCurrentPage = useCallback(
    (index: number) => {
      dispatch(setPage(index));
    },
    [dispatch],
  );

  useEffect(() => {
    const maxPage = data && data.pagesCount > 0 ? data.pagesCount - 1 : 0;
    if (!data || page <= maxPage) return;
    setCurrentPage(maxPage);
  }, [data, page, setCurrentPage]);

  return isLoading ? (
    <Loader size={5} />
  ) : data && data.words.length > 0 ? (
    <Flex column gap={2}>
      {data.words.map((wordInfo: IWord) => (
        <WordCard key={wordInfo.id} {...wordInfo} />
      ))}
      {data.pagesCount > 1 && (
        <Pagination
          amount={data.pagesCount}
          current={page}
          setCurrent={setCurrentPage}
        />
      )}
    </Flex>
  ) : (
    <Page.NotFoundMessage>There are no words here</Page.NotFoundMessage>
  );
};

export default WordList;
