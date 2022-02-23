import { clamp, random } from 'src/helpers';

interface SampleParams<T> {
  arr: T[];
  amount: number;
}

export const sample = <T>({ arr, amount }: SampleParams<T>): T[] => {
  const arrCopy = [...arr];
  const actualAmount = clamp(0, amount, arr.length);

  const result = [...Array(actualAmount)].map(() => {
    const randomIdx = random.range({
      min: 0,
      max: arrCopy.length,
      includeLast: false,
    });

    return arrCopy.splice(randomIdx, 1)[0];
  });

  return result;
};
