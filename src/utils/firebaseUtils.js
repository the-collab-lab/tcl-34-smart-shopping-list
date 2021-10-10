import { db } from '../lib/firebase';
import { collection, addDoc } from '@firebase/firestore';

export const addProduct = () =>
  addDoc(collection(db, 'products'), {
    name: 'A test product',
    date: Date.now(),
  });
