import { useList } from '../../hooks/useList';
import { Link } from 'react-router-dom';

const ItemsList = () => {
  const { list, loading, error } = useList();

  const showProducts = () => {
    if (list.length === 0) {
      return <p>You don't have any product in your list </p>;
    }

    return (
      <ul>
        {list.map(({ date, productName }) => (
          <li key={date}>{productName}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {error ? (
        <p>
          There was an error <Link to="/"> try again </Link>{' '}
        </p>
      ) : null}
      {loading ? <p>Loading...</p> : showProducts()}
    </>
  );
};

export default ItemsList;
