/*
This function receives a Date JS Object and returns 
true IF it has not passed more than one day, otherwise returns
false IF it has passed more than 1 day
*/
export const compareDates = (date) => {
  const today = new Date();
  /*1000 = 1 second
    60=1min
    60=1h
    We're taking the difference betweent two dates in milliseconds
    given by the getTime() method and transform it to hours.
  */
  const millisecondsDifference =
    (date.getTime() - today.getTime()) / (1000 * 60 * 60);
  return Math.abs(Math.round(millisecondsDifference)) <= 24 ? true : false;
};
