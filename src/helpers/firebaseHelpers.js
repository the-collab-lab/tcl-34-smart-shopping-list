export const parseData = (querySnapshot) =>
  querySnapshot.docs.reduce((acc, doc) => {
    const { name, date } = doc.data();
    const id = doc.id;
    return [...acc, { id, name, date }];
  }, []);
