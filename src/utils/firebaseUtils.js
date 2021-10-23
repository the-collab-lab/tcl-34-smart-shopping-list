import { db } from '../lib/firebase';
import { addDoc, collection } from '@firebase/firestore';

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
