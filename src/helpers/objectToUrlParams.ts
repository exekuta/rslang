import { filterDefinedFields } from './filterDefinedFields';

export const objectToUrlParams = (params: unknown) => {
  return !params
    ? ''
    : new URLSearchParams(filterDefinedFields(params)).toString();
};
