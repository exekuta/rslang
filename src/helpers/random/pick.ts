import { random } from 'src/helpers';

interface PickParams<T> {
  arr: T[]
}

export const pick = <T>({ arr }: PickParams<T>): T => {
  const index = random.range({
    max: arr.length,
  });

  return arr[index];
};
