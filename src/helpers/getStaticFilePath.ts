import { SERVER_URI } from 'src/constants/api';

export const getStaticFilePath = (path: string) => {
  return `${SERVER_URI}/${path}`;
};
