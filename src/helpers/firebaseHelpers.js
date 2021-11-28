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
          product.timeFrame,
        ),
      },
    ];
  }, []);
