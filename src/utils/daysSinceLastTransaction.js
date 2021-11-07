/*
This function receives an item object that has an createdAt key, 
turns the value to a date, and a second param which is a function
This either returns the amount of days since last transaction or 
zero if there hasn't been any.
*/

export const daysSinceLastTransaction = (item, callback) => {
  return item.createdAt.toDate() !== 0 ? callback(item.createdAt.toDate()) : 0;
};
