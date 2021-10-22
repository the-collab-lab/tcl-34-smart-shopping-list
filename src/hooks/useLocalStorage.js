import { useState } from 'react';

export const LOCAL_STORAGE_LIST_TOKEN = 'LIST_TOKEN_V1';

export function useLocalStorage(
  localStorageField = LOCAL_STORAGE_LIST_TOKEN,
  initialValue = '',
) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(localStorageField);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(localStorageField, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  return { storedValue, setValue };
}
