/*
This function removes all .,:; characters from given input
AND removes spaces from the beginning and the end of a string
*/
export const normalizer = (input) =>
  input
    .toUpperCase()
    .replaceAll(/[.,:;]/g, '')
    .trim();
