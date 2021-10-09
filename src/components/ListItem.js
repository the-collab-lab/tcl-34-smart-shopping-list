import { useProducts } from '../hooks/useProducts';

const ListItem = () => {
  const { products, loading, error } = useProducts();

  const showProducts = () => {
    if (products.length === 0) {
      return <p>You don't have any product in your list</p>;
    }

    return products.map(({ id, name, date }) => (
      <li key={id}>{`Product: ${name} => Created at: ${new Date(
        date,
      ).toLocaleString()}`}</li>
    ));
  };

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>There was an error</p> : null}
      {!loading ? showProducts() : null}
    </div>
  );
};

export default ListItem;