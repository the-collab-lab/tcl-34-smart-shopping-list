import { doc, setDoc, serverTimestamp } from '@firebase/firestore';
import { calculateEstimate } from '@the-collab-lab/shopping-list-utils';
import { useHistory } from 'react-router';
import { db } from '../../lib/firebase';

//Hooks
import { useProducts } from '../../hooks/useProducts';
import {
  useLocalStorage,
  LOCAL_STORAGE_LIST_TOKEN,
} from '../../hooks/useLocalStorage';

//Utils
import { updatePurchaseDate } from '../../utils/firebaseUtils';
import { TimeFrames } from '../../utils/timeFrames';
import {
  diffBetweenTodayAndDate,
  ONE_DAY,
} from '../../utils/diffBetweenTodayAndDate';
// import { daysSinceLastTransaction } from '../../utils/daysSinceLastTransaction';
import { findProductById } from '../../utils/findProductById';
import ContentContainer from '../content-container';
import Button from '../button';

import './styles.css';

export const ShowProducts = () => {
  const { products, loading } = useProducts();
  const { push } = useHistory();
  const { storedValue } = useLocalStorage(LOCAL_STORAGE_LIST_TOKEN);
  const timeFrames = TimeFrames;
  const one_day = ONE_DAY;

  const handleOnChange = (event, productID) => {
    updatePurchaseDate(productID, storedValue);

    const item = findProductById(products, productID);
    const days =
      item.createdAt.toDate() !== 0
        ? diffBetweenTodayAndDate(item.createdAt.toDate())
        : 0;

    const checked = event.target.checked;

    const estimatedTime = calculateEstimate(
      parseInt(item.timeFrame),
      days,
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
                  diffBetweenTodayAndDate(lastPurchaseDate.toDate()) < one_day
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
