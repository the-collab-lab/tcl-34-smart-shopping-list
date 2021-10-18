import { db } from '../lib/firebase';
import { collection, addDoc } from '@firebase/firestore';

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
