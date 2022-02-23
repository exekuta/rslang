export const clamp = (min: number, val: number, max: number) => {
  return Math.min(Math.max(min, val), max);
};
