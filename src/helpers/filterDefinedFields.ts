export const filterDefinedFields = <T>(obj: T): Partial<T> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([, val]) => typeof val !== 'undefined'),
  ) as Partial<T>;
};
