import { db } from '../lib/firebase';
import { collection, addDoc } from '@firebase/firestore';

export const addProduct = ({ productName, timeFrame, lastPurchaseDate }) =>
  addDoc(collection(db, 'products'), {
    productName,
    timeFrame,
    lastPurchaseDate,
    userToken: Math.floor(Math.random() * 11),
    date: Date.now(),
  });
