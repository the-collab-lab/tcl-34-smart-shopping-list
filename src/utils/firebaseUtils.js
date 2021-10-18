import { db } from '../lib/firebase';
import { collection, addDoc } from '@firebase/firestore';

export const createListToken = (listToken) =>
  addDoc(collection(db, 'listToken'), {
    listToken,
    date: Date.now(),
  });

export const addProduct = ({
  productName,
  timeFrame,
  lastPurchaseDate,
  listToken,
}) =>
  addDoc(collection(db, 'products'), {
    productName,
    timeFrame,
    lastPurchaseDate,
    listToken,
    date: Date.now(),
  });
