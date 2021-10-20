import { db } from '../lib/firebase';
import { setDoc, doc, updateDoc, getDoc } from '@firebase/firestore';

export const createListToken = (listToken) =>
  setDoc(doc(db, 'listTokens', listToken), {});

export const addProduct = ({
  productName,
  timeFrame,
  lastPurchaseDate,
  listToken,
}) =>
  updateDoc(doc(db, 'listTokens', listToken), {
    [`${productName}`]: {
      productName,
      timeFrame,
      lastPurchaseDate,
      date: Date.now(),
    },
  });

export const getList = (token) => {
  const docRef = doc(db, 'listTokens', token);
  return getDoc(docRef);
};
