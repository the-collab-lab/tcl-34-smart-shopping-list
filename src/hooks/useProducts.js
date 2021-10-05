import { db } from '../lib/firebase';
import { collection, query, onSnapshot, addDoc } from '@firebase/firestore';
import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addProduct = async () => {
    try {
      setLoading(true);

      await addDoc(collection(db, 'products'), {
        name: 'A test product',
        date: Date.now(),
      });

      setLoading(false);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  useEffect(() => {
    let unsubscribe;
    setLoading(true);

    const getProducts = async () => {
      try {
        const productsCollection = await collection(db, 'products');
        const queryProducts = query(productsCollection);

        unsubscribe = onSnapshot(queryProducts, (querySnapshot) => {
          const products = querySnapshot.docs.reduce((acc, doc) => {
            const { name, date } = doc.data();
            const id = doc.id;
            return [...acc, { id, name, date }];
          }, []);

          setProducts(products);
          setLoading(false);
        });
      } catch (error) {
        setError(error);
      }
    };

    getProducts();

    return function cleanup() {
      unsubscribe();
    };
  }, []);

  return { products, addProduct, loading, error };
};
