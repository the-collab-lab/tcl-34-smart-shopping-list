import React, { useState } from 'react';

import Button from '../../components/button';
import Header from '../../components/title';
import ContentContainer from '../../components/content-container';
import AddForm from '../../components/add-form';
import Navigation from '../../components/routing/Navigation';

//Utils
import { addProduct } from '../../utils/firebaseUtils';
import { normalizer } from '../../utils/normalizer';
import { checkProduct } from '../../utils/checkProduct';

//Hooks
import {
  useLocalStorage,
  LOCAL_STORAGE_LIST_TOKEN,
} from '../../hooks/useLocalStorage';
import { useProducts } from '../../hooks/useProducts';

//Styles
import './styles.css';

export const AddItemPage = () => {
  const { storedValue } = useLocalStorage(LOCAL_STORAGE_LIST_TOKEN);
  const { products } = useProducts();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const defaultValues = {
    productName: '',
    timeFrame: '7',
    lastPurchaseDate: null,
    daysUntilNextPurchase: 0,
    numberOfPurchases: 0,
  };

  const [formState, setFormState] = useState(defaultValues);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    /*
    Checks the state if the product already exists
    Find returns undefined if it has not matches
    */
    const normalizedInput = normalizer(formState.productName);
    const duplicatedProduct = checkProduct(products, normalizedInput);
    /*
    We have to compare explicitely if it is undefined, otherwise
    it wouldn't work as expected
    */
    if (duplicatedProduct === undefined) {
      addProduct(formState)
        .then(() => setMessage('Successfully created product'))
        .catch(() => setMessage('There was a problem adding the product.'))
        .finally(() => {
          setIsLoading(false);
          setFormState(defaultValues);
        });
    } else {
      //This else runs only if there is a duplicated product
      setMessage(
        'It seems you have already added this product. Try another one.',
      );
    }
    setIsLoading(false);

    setTimeout(() => setMessage(null), 3000);
  };

  const handleForm = (event) => {
    const { name, value } = event.target;
    setFormState((formState) => ({
      ...formState,
      [name]: value,
    }));
  };

  return (
    <>
      <Header className="page-header">Add Item</Header>
      <ContentContainer>
        <form onSubmit={onSubmit} className="add-form">
          <AddForm handleForm={handleForm} formState={formState} />
          <Button type="submit" disabled={formState.productName === ''}>
            Add Item
          </Button>
        </form>

        {isLoading ? <p>Adding product...</p> : null}
        {message ? <p>{message}</p> : null}
      </ContentContainer>
      <Navigation />
    </>
  );
};
