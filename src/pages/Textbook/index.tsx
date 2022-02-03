import React from 'react';
import { Loader } from 'src/components/common';
import { Flex, Page } from 'src/components/core';
import DictionarySelect from 'src/components/DictionarySelect';
import Pagination from 'src/components/Pagination';
import WordCard from 'src/components/WordCard';
import { useTypedDispatch, useTypedSelector } from 'src/hooks';
import { useGetWordsQuery } from 'src/services/api/words.api';
import { selectTextbook, setPage } from 'src/store/reducers/textbook';

const Textbook = () => {
  const dispatch = useTypedDispatch();
  const { group, page } = useTypedSelector(selectTextbook);
  const { data: words, isFetching: areWordsLoading } = useGetWordsQuery({
    group,
    page,
  });

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
          ) : words && (
            <>
              {words.map((wordInfo) => (
                <WordCard key={wordInfo.id} {...wordInfo} />
              ))}
              <Pagination
                amount={30}
                current={page}
                setCurrent={setCurrentPage}
              />
            </>
          )}
        </Flex>
      </Flex>
    </Page.Page>
  );
};

export default Textbook;
