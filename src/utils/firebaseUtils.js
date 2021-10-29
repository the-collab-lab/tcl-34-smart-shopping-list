// In this file we add the functions that access Firebase (get, add, update)
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  serverTimestamp,
  getDocs,
} from '@firebase/firestore';
import { db } from '../lib/firebase';

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
    createdAt: serverTimestamp(),
  });

export const updatePurchaseDate = (productID, listToken) => {
  const productRef = doc(db, listToken, productID);

  return updateDoc(productRef, {
    lastPurchaseDate: serverTimestamp(),
  });
};

/** created to validate the token in join-list and display the message
 * when the token does not exist in /welcome */

export const isTokenValid = async (token = '') => {
  if (token.length === 0) return false;
  const productsCol = collection(db, token);
  const productSnapshot = await getDocs(productsCol);
  return !productSnapshot.empty;
};
