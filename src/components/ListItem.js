import { useProducts } from '../hooks/useProducts';

const ListItem = () => {
  const { products, loading, error } = useProducts();

  return (
    <div>
      {loading && 'Loading'}
      {error && 'Error'}
      {products &&
        products.map(({ id, name, date }) => (
          <li key={id}>{`Product: ${name} => Created at: ${date}`}</li>
        ))}
    </div>
  );
};

export default ListItem;
