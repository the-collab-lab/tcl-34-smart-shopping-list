import { db } from '../lib/firebase';
import { setDoc, doc, updateDoc, getDoc } from '@firebase/firestore';

export const FIREBASE_COLLECTION_TOKENS_ID = 'listTokens';

export const createListToken = (listToken) =>
  setDoc(doc(db, FIREBASE_COLLECTION_TOKENS_ID, listToken), {});

export const addProduct = ({
  productName,
  timeFrame,
  lastPurchaseDate,
  listToken,
}) =>
  updateDoc(doc(db, FIREBASE_COLLECTION_TOKENS_ID, listToken), {
    [`${productName}`]: {
      productName,
      timeFrame,
      lastPurchaseDate,
      date: Date.now(),
    },
  });

export const getList = (token) => {
  const docRef = doc(db, FIREBASE_COLLECTION_TOKENS_ID, token);
  return getDoc(docRef);
};
