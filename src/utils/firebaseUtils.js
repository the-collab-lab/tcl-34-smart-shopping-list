import { db } from '../lib/firebase';
import { addDoc, collection, getDocs } from '@firebase/firestore';

export const addProduct = ({
  productName,
  timeFrame,
  lastPurchaseDate,
  listToken,
}) =>
  addDoc(collection(db, listToken), {
    productName,
    timeFrame,
    lastPurchaseDate,
    date: Date.now(),
  });

export const isTokenValid = async (token = '') => {
  if (token.length === 0) return false;
  const productsCol = collection(db, token);
  const productSnapshot = await getDocs(productsCol);
  return !productSnapshot.empty;
};
