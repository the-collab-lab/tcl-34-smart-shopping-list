import { useState, useEffect } from 'react';
import { getList } from '../utils/firebaseUtils';
import { useLocalStorage, LOCAL_STORAGE_LIST_TOKEN } from './useLocalStorage';

export const useList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { storedValue } = useLocalStorage(LOCAL_STORAGE_LIST_TOKEN);

  useEffect(() => {
    setLoading(true);

    getList(storedValue)
      .then((docs) => setList(Object.values(docs.data())))
      .catch(() => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, [storedValue]);

  return { list, loading, error };
};
