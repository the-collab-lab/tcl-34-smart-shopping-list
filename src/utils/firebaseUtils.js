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

/** created to validate the token in join-list and display the message
 * when the token does not exist in /welcome */

export const isTokenValid = async (token = '') => {
  if (token.length === 0) return false;
  const productsCol = collection(db, token);
  const productSnapshot = await getDocs(productsCol);
  return !productSnapshot.empty;
};
