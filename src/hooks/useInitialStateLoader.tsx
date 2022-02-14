import { useEffect } from 'react';
import { LocalStorageKeys } from 'src/constants/localStorage';
import { useTypedDispatch, useTypedSelector } from 'src/hooks';
import { localStorageService } from 'src/services/localStorage.service';
import { login, selectAuth } from 'src/store/reducers/auth';
import { selectTextbook, setPagination } from 'src/store/reducers/textbook';

export const useInitialStateLoader = () => {
  const dispatch = useTypedDispatch();
  const { auth } = useTypedSelector(selectAuth);
  const textbookData = useTypedSelector(selectTextbook);

  useEffect(() => {
    const storedUser = localStorageService.get(LocalStorageKeys.AUTH);
    if (!storedUser) return;
    dispatch(login(storedUser));
  }, [dispatch]);

  useEffect(() => {
    const storedTextbookData = localStorageService.get(
      LocalStorageKeys.TEXTBOOK,
    );
    if (!storedTextbookData) return;
    dispatch(setPagination(storedTextbookData));
  }, [dispatch]);

  useEffect(() => {
    localStorageService.set(LocalStorageKeys.AUTH, auth);
  }, [auth]);

  useEffect(() => {
    localStorageService.set(LocalStorageKeys.TEXTBOOK, {
      group: textbookData.group,
      page: textbookData.page,
    });
  }, [auth, textbookData.group, textbookData.page]);
};
