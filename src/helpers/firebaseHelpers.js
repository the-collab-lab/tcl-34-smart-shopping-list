// In this file we add the utility functions that we can reuse in other parts of the code (data parse, filters) that are related to using Firebase
import { nextPurchaseDay } from '../utils/nextPurchaseDay';
export const parseData = (querySnapshot) =>
  querySnapshot.docs.reduce((acc, doc) => {
    const { id } = doc;
    const product = doc.data();

    return [
      ...acc,
      {
        id,
        ...product,
        /***
         * We most transform the data to have acces
         * to a propper aria-label and it's color
         */
        timeFrameLabel: nextPurchaseDay(
          product.daysUntilNextPurchase,
          product.lastPurchaseDate,
          product.numberOfPurchases,
        ),
      },
    ].sort((a, b) => {
      /***
       * Firt we verified if days are equals in order to sort names alphabetically
       * If not we sort the items by the days
       */
      if (a.daysUntilNextPurchase === b.daysUntilNextPurchase) {
        if (a.productName > b.productName) {
          return 1;
        }
        return -1;
      }
      if (a.daysUntilNextPurchase > b.daysUntilNextPurchase) {
        return 1;
      }
      return -1;
    });
  }, []);
