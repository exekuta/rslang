export const localStorageService = {
  get(key: string) {
    const value = localStorage.getItem(key);
    return value && JSON.parse(value);
  },
  set(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};
