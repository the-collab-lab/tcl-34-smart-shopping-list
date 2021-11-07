/*
Receives an array where we'll loop through to find the element
that matches the id

The array MUST contain an id property!
*/

export const findProductById = (array, itemId) => {
  const product = array?.find((item) => item.id === itemId);
  return product;
};
