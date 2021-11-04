import React from 'react';
import { calculateEstimate } from '@the-collab-lab/shopping-list-utils';
import { useHistory } from 'react-router';
import Button from '../button';
import { updatePurchaseDate } from '../../utils/firebaseUtils';
import { useProducts } from '../../hooks/useProducts';
import {
  useLocalStorage,
  LOCAL_STORAGE_LIST_TOKEN,
} from '../../hooks/useLocalStorage';
import { TimeFrames } from '../../utils/timeFrames';
import { compareDates } from '../../utils/compareDates';
import ContentContainer from '../content-container';
import { doc, setDoc, serverTimestamp } from '@firebase/firestore';
import { db } from '../../lib/firebase';

import './styles.css';

export const ShowProducts = () => {
  const { products, loading } = useProducts();
  const { push } = useHistory();
  const { storedValue } = useLocalStorage(LOCAL_STORAGE_LIST_TOKEN);
  const timeFrames = TimeFrames;
  const ONE_DAY = 1;

  const handleOnChange = (e, productID) => {
    updatePurchaseDate(productID, storedValue);
    const item = products?.find((product) => product.id === productID);
    const daysSinceLastTransaction =
      item.createdAt.toDate() !== 0 ? compareDates(item.createdAt.toDate()) : 0;
    const checked = e.target.checked;
    debugger;
    const estimatedTime = calculateEstimate(
      parseInt(item.timeFrame),
      daysSinceLastTransaction,
      item.numberOfPurchases,
    );
    if (checked) {
      const itemRef = doc(db, storedValue, productID);
      setDoc(
        itemRef,
        {
          lastPurchaseDate: serverTimestamp(),
          daysUntilNextPurchase: estimatedTime,
          numberOfPurchases: item.numberOfPurchases + 1,
        },
        { merge: true },
      );
    } else {
      const itemRef = doc(db, storedValue, productID);
      setDoc(
        itemRef,
        {
          lastPurchaseDate: null,
          numberOfPurchases: item.numberOfPurchases - 1,
        },
        { merge: true },
      );
    }
  };

  if (loading) {
    return (
      <ContentContainer>
        <p>Loading...</p>
      </ContentContainer>
    );
  }

  if (products.length === 0) {
    return (
      <ContentContainer>
        <p className="empty-shopping-list">
          Your shopping list is currently empty.
        </p>
        <Button onClick={() => push('/addItem')}>Add Item</Button>
      </ContentContainer>
    );
  }

  return (
    <ContentContainer>
      <ul>
        {products?.map(({ id, productName, lastPurchaseDate, timeFrame }) => (
          <li className="checkbox-item" key={id}>
            <label htmlFor={id} className="checkbox-label">
              <input
                type="checkbox"
                id={id}
                name={productName}
                onChange={(event) => handleOnChange(event, id)}
                checked={
                  lastPurchaseDate &&
                  compareDates(lastPurchaseDate.toDate()) < ONE_DAY
                }
                aria-label={timeFrames[timeFrame]}
              />
              <span
                className={`checkmark checkbox-timeFrame-${timeFrame}`}
              ></span>
              <span className="checkbox-name">{productName}</span>
            </label>
          </li>
        ))}
      </ul>
    </ContentContainer>
  );
};
