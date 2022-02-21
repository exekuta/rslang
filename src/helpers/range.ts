export const range = (min: number, max: number, step = 1) => {
  const length = max - min;
  return [...Array(length)].map((_el, idx) => idx * step + min);
};
