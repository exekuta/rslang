import React, { useCallback, useEffect } from 'react';
import { Loader } from 'src/components/common';
import { Flex, Page } from 'src/components/core';
import Pagination from 'src/components/Pagination';
import WordCard from 'src/components/WordCard';
import { useTypedDispatch, useTypedSelector } from 'src/hooks';
import { selectTextbook, setPage } from 'src/store/reducers/textbook';
import { IWord } from 'src/types/schemas';
import { useGetWordList } from '../../helpers/useWordList';

const WordList = () => {
  const dispatch = useTypedDispatch();
  const { page } = useTypedSelector(selectTextbook);
  const { data, isLoading: areWordsLoading } = useGetWordList();

  const setCurrentPage = useCallback((index: number) => {
    dispatch(setPage(index));
  }, [dispatch]);

  useEffect(() => {
    const maxPage = data ? data.pagesCount - 1 : 0;
    if (!data || page <= maxPage) return;
    setCurrentPage(maxPage);
  }, [data, page, setCurrentPage]);

  return (
    <Flex column gap={2}>
      {areWordsLoading ? (
        <Loader size={5} />
      ) : data && data.words.length > 0 ? (
        <>
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
        </>
      ) : (
        <Page.NotFoundMessage>There are no words here</Page.NotFoundMessage>
      )}
    </Flex>
  );
};

export default WordList;
