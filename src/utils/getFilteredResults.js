import { normalizeFilter } from './normalizeFilter';

export const getFilteredResults = (searchTerm, products) => {
  if (searchTerm === '') {
    return products;
  }

  return products.filter(({ productName }) =>
    normalizeFilter(productName).includes(normalizeFilter(searchTerm)),
  );
};
