import { db } from '../lib/firebase';
import { collection, addDoc } from '@firebase/firestore';

export const addProduct = ({ productName, timeFrame, date }) =>
  addDoc(collection(db, 'products'), {
    productName,
    timeFrame,
    date,
  });
