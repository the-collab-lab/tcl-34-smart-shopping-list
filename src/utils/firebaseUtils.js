import { db } from '../lib/firebase';
import { collection, addDoc } from '@firebase/firestore';

export const addProduct = () =>
  addDoc(collection(db, 'products'), {
    productName: 'A test product',
    date: Date.now(),
  });
