import { useState } from 'react';

export function useLocalStorage(initialValue = '') {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem('LIST_TOKEN_V1');
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem('LIST_TOKEN_V1', JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  return { storedValue, setValue };
}
