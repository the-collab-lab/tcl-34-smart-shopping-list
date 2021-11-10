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
        timeFrameLabel: nextPurchaseDay(
          product.daysUntilNextPurchase,
          product.lastPurchaseDate,
          product.numberOfPurchases,
        ),
      },
    ].sort((a, b) => {
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
