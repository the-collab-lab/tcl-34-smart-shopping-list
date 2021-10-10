import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, query, onSnapshot } from '@firebase/firestore';
import { parseData } from '../helpers/firebaseHelpers';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let unsubscribe;
    setLoading(true);

    // Retrieves information from Firestore
    const getProducts = async () => {
      try {
        const productsCollection = await collection(db, 'products');
        const queryProducts = query(productsCollection);

        unsubscribe = onSnapshot(queryProducts, (querySnapshot) => {
          setProducts(parseData(querySnapshot));
          setLoading(false);
        });
      } catch (error) {
        setError(error);
        console.log('Something happened: ', error);
      }
    };

    getProducts();

    return function cleanup() {
      // Stop listening to changes from Firebase
      unsubscribe();
    };
  }, []);

  return { products, loading, error };
};
