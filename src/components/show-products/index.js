import { useState, useEffect } from 'react';
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
import './styles.css';

export const ShowProducts = () => {
  const { products, loading } = useProducts();
  const { push } = useHistory();
  const { storedValue } = useLocalStorage(LOCAL_STORAGE_LIST_TOKEN);
  const [searchTerm, setSearchTerm] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    let results = products;

    if (searchTerm !== '') {
      results = products.filter(({ productName }) =>
        productName
          .toLowerCase()
          .replace(/\s/g, '')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(
            searchTerm
              .toLowerCase()
              .replace(/\s/g, '')
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, ''),
          ),
      );
    }

    setList(results);
  }, [searchTerm, products]);

  const handleCheckboxChange = (productID) => {
    updatePurchaseDate(productID, storedValue);
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
      <form className="filter-form">
        <label htmlFor="filter">
          Filter items
          <input
            className="input-item"
            type="search"
            id="filter"
            name="filter"
            aria-label="Search through list content"
            placeholder="Start typing here..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>
      </form>
      <ul>
        {list.length > 0 ? (
          list.map(({ id, productName, lastPurchaseDate, timeFrame }) => (
            <li className="checkbox-item" key={id}>
              <label htmlFor={id} className="checkbox-label">
                <input
                  type="checkbox"
                  id={id}
                  name={productName}
                  onChange={() => handleCheckboxChange(id)}
                  checked={
                    lastPurchaseDate && compareDates(lastPurchaseDate.toDate())
                  }
                  aria-label={TimeFrames[timeFrame]}
                />
                <span
                  className={`checkmark checkbox-timeFrame-${timeFrame}`}
                ></span>
                <span className="checkbox-name">{productName}</span>
              </label>
            </li>
          ))
        ) : (
          <p className="empty-shopping-list">Product not found.</p>
        )}
      </ul>
    </ContentContainer>
  );
};
