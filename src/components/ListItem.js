import { useProducts } from '../hooks/useProducts';

const ListItem = () => {
  const { products, loading, error } = useProducts();

  return (
    <div>
      {loading && 'Loading'}
      {error && 'Error'}
      {products &&
        products.map(({ name, date }) => (
          <li>{`Product: ${name} => Created at: ${date}`}</li>
        ))}
    </div>
  );
};

export default ListItem;
