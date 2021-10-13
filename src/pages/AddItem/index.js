import React, { useState } from 'react';
import Button from '../../components/button';
import Title from '../../components/title';
import ContentContainer from '../../components/content-container';
import AddForm from '../../components/add-form';
import { addProduct } from '../../utils/firebaseUtils';
import './styles.css';

export const AddItemPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [formState, setFormState] = useState({
    productName: '',
    timeFrame: '7',
    lastPurchaseDate: null,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    addProduct(formState)
      .then((res) => console.log(res))
      .catch(() => setError(true))
      .finally(() => {
        setIsLoading(false);

        setFormState({
          productName: '',
          timeFrame: '7',
          lastPurchaseDate: null,
        });

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
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <Title>Add Item</Title>
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
    </>
  );
};
