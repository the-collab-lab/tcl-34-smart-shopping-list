import { useState, useEffect } from 'react';
import { getList } from '../utils/firebaseUtils';
import { useLocalStorage } from './useLocalStorage';

export const useList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { storedValue } = useLocalStorage();

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
