import { PAGES_COUNT } from 'src/constants/dictionary';
import { objectToUrlParams, range } from 'src/helpers';
import { DictionaryName } from 'src/types/Dictionary.type';
import { IWord } from 'src/types/schemas';
import { client } from '.';

const prefix = '/words/';

export const getAllDictionaryWords = async ({
  dictionaryName,
}: {
  dictionaryName: DictionaryName;
}) => {
  const requests = range(0, PAGES_COUNT).map((idx) => {
    return client.get(
      `${prefix}?${objectToUrlParams({
        group: dictionaryName,
        page: idx,
      })}`,
    );
  });

  const responses = await Promise.all(requests);
  const words: IWord[] = responses.flatMap((response) => response.data);
  return words;
};
