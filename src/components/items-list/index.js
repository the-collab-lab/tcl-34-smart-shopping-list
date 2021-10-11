import { useProducts } from '../../hooks/useProducts';

const ItemsList = () => {
  const { products, loading, error } = useProducts();

  const showProducts = () => {
    if (products.length === 0) {
      return <p>You don't have any product in your list</p>;
    }

    return (
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>{`Product: ${name}`}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {error ? <p>There was an error</p> : null}
      {loading ? <p>Loading...</p> : showProducts()}
    </>
  );
};

export default ItemsList;
