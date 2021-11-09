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
import { Contexts } from '../helpers/validatedCollection';
import { validatedCollection } from '../helpers/validatedCollection';

export const addProduct = ({
  productName,
  timeFrame,
  lastPurchaseDate,
  daysUntilNextPurchase,
  numberOfPurchases,
  collectionID = validatedCollection(Contexts.list),
}) =>
  addDoc(collection(db, collectionID), {
    productName,
    timeFrame,
    lastPurchaseDate,
    daysUntilNextPurchase,
    numberOfPurchases,
    createdAt: serverTimestamp(),
  });

export const deleteProduct = async (
  productID,
  collectionID = validatedCollection(Contexts.list),
) => {
  const productRef = doc(db, collectionID, productID);

  return deleteDoc(productRef);
};

export const updatePurchaseDate = (
  productID,
  collectionID = validatedCollection(Contexts.list),
) => {
  const productRef = doc(db, collectionID, productID);

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
