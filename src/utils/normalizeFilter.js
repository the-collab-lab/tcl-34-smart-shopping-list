/*
This function removes all spaces, special characters and accents
*/
export const normalizeFilter = (input) =>
  input
    .toLowerCase()
    .replace(/\s/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
