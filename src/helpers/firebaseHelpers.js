export const parseData = (querySnapshot) =>
  querySnapshot.docs.reduce((acc, doc) => {
    const { productName, listToken, timeFrame, lastPurchaseDate } = doc.data();
    return [
      ...acc,
      { id: doc.id, productName, listToken, timeFrame, lastPurchaseDate },
    ];
  }, []);
