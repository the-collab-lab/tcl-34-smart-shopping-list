import { normalizer } from './normalizer';

/*
This function checks if there is any duplicated product.
It compares the state and the user's imput
*/
export const checkProduct = (products, normalizedInput) =>
  products.find(
    (product) => normalizer(product.productName) === normalizedInput,
  );
