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
import {
  doc,
  setDoc,
} from '@firebase/firestore';
import { db } from '../../lib/firebase';

import { parseData } from '../../helpers/firebaseHelpers';
import './styles.css';

export const ShowProducts = () => {
  const { products, loading } = useProducts();
  const { push } = useHistory();
  const { storedValue } = useLocalStorage(LOCAL_STORAGE_LIST_TOKEN);
  const timeFrames = TimeFrames;
  const ONE_MINUTE = 10 * 1000;

  const handleOnChange = (e, productID) => {
    updatePurchaseDate(productID, storedValue);
    let date = new Date();
    const item = parseData.find((element) => element.productID === productID);
    const daysSinceLastTransaction = item.lastPurchasedDate
      ? Math.round((new Date() - item.lastPurchasedDate) / 1000 / 60 / 60 / 24)
      : 0;
    const checked = e.target.checked;
    if (checked) {
      const itemRef = doc(db, 'listToken', productID);
      setDoc(
        itemRef,
        {
          lastPurchasedDate: date.getTime(),
          daysUntilNextPurchase: calculateEstimate(
            item.daysUntilNextPurchase,
            daysSinceLastTransaction,
            item.numberOfPurchases,
          ),
          numberOfPurchases: item.numberOfPurchases + 1,
        },
        { merge: true },
      );
    } else {
      const itemRef = doc(db, 'listToken', productID);
      setDoc(
        itemRef,
        { lastPurchasedDate: null, numberOfPurchases: item.numberOfPurchases - 1 },
        { merge: true },
      );
    };

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
                onChange={() => handleOnChange(id)}
                checked={
                  lastPurchaseDate &&
                  new Date() - item.lastPurchasedDate < ONE_MINUTE && compareDates(lastPurchaseDate.toDate())
                }
                ariaLabel={timeFrames[timeFrame]}
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
