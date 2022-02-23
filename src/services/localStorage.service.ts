import { LocalStorageKeys } from 'src/constants/localStorage';

export const localStorageService = {
  get(key: LocalStorageKeys) {
    const value = localStorage.getItem(key);
    return value && JSON.parse(value);
  },
  set(key: LocalStorageKeys, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key: LocalStorageKeys) {
    localStorage.removeItem(key);
  },
};
