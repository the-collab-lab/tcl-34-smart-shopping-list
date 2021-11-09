import { doc, setDoc, serverTimestamp } from '@firebase/firestore';
import { calculateEstimate } from '@the-collab-lab/shopping-list-utils';
import { useHistory } from 'react-router';
import { db } from '../../lib/firebase';

//Hooks
import { useState, useEffect } from 'react';
import { useProducts } from '../../hooks/useProducts';
import {
  useLocalStorage,
  LOCAL_STORAGE_LIST_TOKEN,
} from '../../hooks/useLocalStorage';

//Utils
import { deleteProduct, updatePurchaseDate } from '../../utils/firebaseUtils';
import { TimeFrames } from '../../utils/timeFrames';
import {
  diffBetweenTodayAndDate,
  ONE_DAY,
} from '../../utils/diffBetweenTodayAndDate';
import { getFilteredResults } from '../../utils/getFilteredResults';
import { findProductById } from '../../utils/findProductById';
import ContentContainer from '../content-container';
import Button from '../button';

import './styles.css';

export const ShowProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [list, setList] = useState([]);
  const { products, loading } = useProducts();
  const { push } = useHistory();
  const { storedValue } = useLocalStorage(LOCAL_STORAGE_LIST_TOKEN);
  const one_day = ONE_DAY;

  const handleCheckboxChange = (event, productID) => {
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

  const handleDeleteProduct = (productID) => {
    if (window.confirm('Are you sure you want to delete?')) {
      deleteProduct(productID, storedValue)
        .then(() => window.alert('Successfully deleted product.'))
        .catch(() =>
          window.alert('It was not possible to delete the product. Try again.'),
        );
    }
  };

  useEffect(() => {
    setList(getFilteredResults(searchTerm, products));
  }, [searchTerm, products]);

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
      <form className="filter-form">
        <label htmlFor="filter">
          Filter items
          <input
            className="search-item"
            type="text"
            id="filter"
            name="filter"
            aria-label="Search through list content."
            placeholder="Start typing here..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>
        {searchTerm && (
          <input
            className="close-icon"
            onClick={() => setSearchTerm('')}
            type="reset"
            value="X"
            aria-label="This button clears the content of the search field."
          />
        )}
      </form>

      {list.length > 0 ? (
        <ul>
          {list.map(({ id, productName, lastPurchaseDate, timeFrame }) => (
            <li className="checkbox-item" key={id}>
              <label htmlFor={id} className="checkbox-label">
                <input
                  type="checkbox"
                  id={id}
                  name={productName}
                  onChange={(event) => handleCheckboxChange(event, id)}
                  checked={
                    lastPurchaseDate &&
                    diffBetweenTodayAndDate(lastPurchaseDate.toDate()) < one_day
                  }
                  aria-label={TimeFrames[timeFrame]}
                />
                <span
                  className={`checkmark checkbox-timeFrame-${timeFrame}`}
                ></span>
                <span className="checkbox-name">{productName}</span>
                <button
                  className="button-delete"
                  aria-label="This button deletes a product."
                  onClick={() => handleDeleteProduct(id)}
                >
                  Delete
                </button>
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-shopping-list">{`There aren't products that match with '${searchTerm}'`}</p>
      )}
    </ContentContainer>
  );
};
