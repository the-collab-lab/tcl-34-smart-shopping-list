export const parseData = (querySnapshot) =>
  querySnapshot.docs.reduce((acc, doc) => {
    const { name, user_token, deadline, last_purchase_date } = doc.data();
    return [
      ...acc,
      { id: doc.id, name, user_token, deadline, last_purchase_date },
    ];
  }, []);
