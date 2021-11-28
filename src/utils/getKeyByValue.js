export const getKeyByValue = (object, value) => {
  /**
   * Loops trough the object to search for the key that holds a given value
   * @param {object} object
   * @param {string} value - Can be any, but in this case is a string
   * that comes from the timeFrame from Firestore
   **/

  for (var prop in object) {
    if (object.hasOwnProperty(prop) && object[prop] === value) {
      return prop;
    }
  }
};
