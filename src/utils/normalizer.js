/*
This function removes all .,:; characters from given input
*/
export const normalizer = (input) =>
  input.toUpperCase().replaceAll(/[.,:;]/g, '');
