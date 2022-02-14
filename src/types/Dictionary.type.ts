export enum DictionaryName {
  LEVEL_1,
  LEVEL_2,
  LEVEL_3,
  LEVEL_4,
  LEVEL_5,
  LEVEL_6,
}

export type DictionaryNameValue = `${DictionaryName}`;
export const dictionaryNameValues = Object.values(
  DictionaryName,
);

export enum AdditionalGroupName {
  DIFFICULT_WORDS = 'difficultWords',
}

export type GroupName = DictionaryName | AdditionalGroupName.DIFFICULT_WORDS;
