import React, { useState } from 'react';
import Button from '../../components/button';
import Title from '../../components/title';
import ContentContainer from '../../components/content-container';
import AddForm from '../../components/add-form';
import Navigation from '../../components/routing/Navigation';

//Utils
import { addProduct } from '../../utils/firebaseUtils';
import { normalizer } from '../../utils/normalizer';
import { checkProduct } from '../../utils/checkProduct';

//Hooks
import { useProducts } from '../../hooks/useProducts';

//Styles
import './styles.css';

export const AddItemPage = () => {
  const { products } = useProducts();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const defaultValues = {
    productName: '',
    timeFrame: '7',
    lastPurchaseDate: null,
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
        .then((res) => console.log(res))
        .finally(() => {
          setIsLoading(false);
          setFormState(defaultValues);
        });
    }
    setIsLoading(false);
    setMessage(
      duplicatedProduct
        ? 'It seems you have already added this product. Try another one.'
        : 'Successfully created product!',
    );

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
      <Navigation />
    </>
  );
};
