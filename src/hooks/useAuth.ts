import { selectAuth } from 'src/store/reducers/auth';
import { useTypedSelector } from './redux';

export const useAuth = () => {
  return useTypedSelector(selectAuth);
};
