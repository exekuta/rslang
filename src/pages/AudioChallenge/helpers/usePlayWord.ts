import { getStaticFilePath } from 'src/helpers/getStaticFilePath';
import { useAudio } from 'src/hooks';

export const usePlayWord = (filePath: string | undefined) => {
  return useAudio(!filePath ? '' : getStaticFilePath(filePath));
};
