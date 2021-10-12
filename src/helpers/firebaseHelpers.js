export const parseData = (querySnapshot) =>
  querySnapshot.docs.reduce((acc, doc) => {
    const { productName, userToken, deadline, lastPurchaseDate } = doc.data();
    return [
      ...acc,
      { id: doc.id, productName, userToken, deadline, lastPurchaseDate },
    ];
  }, []);
