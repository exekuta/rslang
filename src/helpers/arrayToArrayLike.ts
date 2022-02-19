export const arrayToArrayLike = <T>(arr: T[]): ArrayLike<T> => {
  return {
    ...arr,
    length: arr.length,
  };
};
