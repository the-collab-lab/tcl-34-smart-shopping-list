export const parseData = (querySnapshot) =>
  querySnapshot.docs.reduce((acc, doc) => {
    const { name, date } = doc.data();
    return [...acc, { id: doc.id, name, date }];
  }, []);
