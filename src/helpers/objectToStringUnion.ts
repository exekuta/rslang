export const objectToStringUnion = (obj: {[key: string]: string}) => {
  return Object.values(obj).join('|');
};
