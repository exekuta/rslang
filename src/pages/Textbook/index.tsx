import React from 'react';
import { Loader } from 'src/components/common';
import { Flex, Page } from 'src/components/core';
import DictionarySelect from 'src/components/DictionarySelect';
import Pagination from 'src/components/Pagination';
import WordCard from 'src/components/WordCard';
import { useTypedDispatch, useTypedSelector } from 'src/hooks';
import { selectTextbook, setPage } from 'src/store/reducers/textbook';
import { IWord } from 'src/types/schemas';
import { useGetWordList } from './helpers/useWordList';

const Textbook = () => {
  const dispatch = useTypedDispatch();
  const { page } = useTypedSelector(selectTextbook);
  const { data, isLoading: areWordsLoading } = useGetWordList();

  const setCurrentPage = (index: number) => {
    dispatch(setPage(index));
  };

  return (
    <Page.Page>
      <Page.Title isMargin>Textbook</Page.Title>
      <Flex column gap={2}>
        <DictionarySelect />
        <Flex column gap={2}>
          {areWordsLoading ? (
            <Loader size={5} />
          ) : (
            data && (
              <>
                {data.words.map((wordInfo: IWord) => (
                  <WordCard
                    key={wordInfo.id}
                    {...wordInfo}
                  />
                ))}
                <Pagination
                  amount={data.pagesCount}
                  current={page}
                  setCurrent={setCurrentPage}
                />
              </>
            )
          )}
        </Flex>
      </Flex>
    </Page.Page>
  );
};

export default Textbook;
