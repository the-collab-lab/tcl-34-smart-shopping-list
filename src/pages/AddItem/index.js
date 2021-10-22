import React, { useState } from 'react';
import { addProduct } from '../../utils/firebaseUtils';
import {
  useLocalStorage,
  LOCAL_STORAGE_LIST_TOKEN,
} from '../../hooks/useLocalStorage';

import Button from '../../components/button';
import Header from '../../components/title';
import ContentContainer from '../../components/content-container';
import AddForm from '../../components/add-form';
import Navigation from '../../components/routing/Navigation';

import './styles.css';

export const AddItemPage = () => {
  const { storedValue } = useLocalStorage(LOCAL_STORAGE_LIST_TOKEN);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const defaultValues = {
    productName: '',
    timeFrame: '7',
    lastPurchaseDate: null,
    listToken: storedValue,
  };

  const [formState, setFormState] = useState(defaultValues);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    addProduct(formState)
      .then((res) => console.log(res))
      .catch(() => setError(true))
      .finally(() => {
        setIsLoading(false);

        setFormState(defaultValues);

        setMessage(
          error
            ? 'Unable to add product. Please, try again.'
            : 'Successfully created product!',
        );

        setTimeout(() => setMessage(null), 3000);
      });
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
