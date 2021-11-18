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
import { TimeFrameLabels } from '../../utils/timeFrames';
import {
  diffBetweenTodayAndDate,
  ONE_DAY,
} from '../../utils/diffBetweenTodayAndDate';
import { getFilteredResults } from '../../utils/getFilteredResults';
import { findProductById } from '../../utils/findProductById';
import ContentContainer from '../content-container';
import Button from '../button';

// Icons
import { FiTrash2, FiX } from 'react-icons/fi';

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
      item.lastPurchaseDate !== null
        ? diffBetweenTodayAndDate(item.lastPurchaseDate.toDate())
        : 0;

    const checked = event.target.checked;

    const estimatedTime = calculateEstimate(
      item.daysUntilNextPurchase,
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

  const handleDeleteProduct = (productID, productName) => {
    if (window.confirm(`Are you sure you want to delete "${productName}"?`)) {
      deleteProduct(productID, storedValue)
        .then(() =>
          window.alert(`Successfully deleted product "${productName}".`),
        )
        .catch(() =>
          window.alert(
            `It was not possible to delete the product "${productName}". Try again.`,
          ),
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
    // <main className="list-container">
    <>
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
          <button
            className="close-icon"
            aria-label="This button clears the content of the search field."
            onClick={() => setSearchTerm('')}
          >
            <FiX />
          </button>
        )}
      </form>

      {list.length > 0 ? (
        <ul className="products-list">
          {list.map(({ id, productName, lastPurchaseDate, timeFrameLabel }) => {
            const checked =
              lastPurchaseDate &&
              diffBetweenTodayAndDate(lastPurchaseDate.toDate()) < one_day;

            return (
              <li
                className={`checkbox-item checkbox-timeFrame-${timeFrameLabel}`}
                key={id}
              >
                <label
                  htmlFor={id}
                  className={
                    checked ? 'checkbox-label checked-label' : 'checkbox-label'
                  }
                >
                  <input
                    type="checkbox"
                    id={id}
                    name={productName}
                    onChange={(event) => handleCheckboxChange(event, id)}
                    checked={checked}
                    aria-label={TimeFrameLabels[timeFrameLabel]}
                  />
                  <span className={`checkmark`}></span>
                  {productName}
                </label>
                <button
                  className="button-delete"
                  aria-label={`This button deletes the product ${productName}.`}
                  onClick={() => handleDeleteProduct(id, productName)}
                >
                  <FiTrash2 />
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="empty-shopping-list">{`There aren't products that match with '${searchTerm} '`}</p>
      )}
    </>
    // </main>
  );
};
