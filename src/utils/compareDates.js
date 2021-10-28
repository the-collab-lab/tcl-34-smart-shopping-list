/*
This function receives a Date JS Object and returns 
true IF it has not passed more than one day, otherwise returns
false IF it has passed more than 1 day
*/
export const compareDates = (date) => {
  const today = new Date();
  const diff = (date.getTime() - today.getTime()) / (1000 * 60 * 60);
  return Math.abs(Math.round(diff)) <= 24 ? true : false;
};
