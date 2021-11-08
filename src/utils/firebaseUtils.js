// In this file we add the functions that access Firebase (get, add, update)
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  serverTimestamp,
  deleteDoc,
  getDocs,
} from '@firebase/firestore';
import { db } from '../lib/firebase';

export const addProduct = ({
  productName,
  timeFrame,
  lastPurchaseDate,
  daysUntilNextPurchase,
  numberOfPurchases,
  listToken,
}) =>
  addDoc(collection(db, listToken), {
    productName,
    timeFrame,
    lastPurchaseDate,
    daysUntilNextPurchase,
    numberOfPurchases,
    createdAt: serverTimestamp(),
  });

export const handleDelete = async (productID, listToken) => {
  const productRef = doc(db, listToken, productID);
  if (window.confirm('Are you sure you want to delete?')) {
    await deleteDoc(productRef)
      .then(window.alert('Successfully deleted product.'))
      .catch(
        window.alert('It was not possible to delete the product. Try again.'),
      );
  }
};

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
