interface RangeParams {
  min?: number,
  max: number,
  includeLast?: boolean
}

export const range = ({ min = 0, max, includeLast }: RangeParams) => {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  const addition = includeLast ? 1 : 0;
  return Math.floor(Math.random() * (intMax - intMin + addition)) + intMin;
};
