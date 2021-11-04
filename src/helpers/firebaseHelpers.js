// In this file we add the utility functions that we can reuse in other parts of the code (data parse, filters) that are related to using Firebase

export const parseData = (querySnapshot) =>
  querySnapshot.docs.reduce((acc, doc) => {
    const {
      productName,
      timeFrame,
      lastPurchaseDate,
      daysUntilNextPurchase,
      numberOfPurchases,
      createdAt,
    } = doc.data();

    return [
      ...acc,
      {
        id: doc.id,
        productName,
        timeFrame,
        lastPurchaseDate,
        daysUntilNextPurchase,
        numberOfPurchases,
        createdAt,
      },
    ];
  }, []);
