import { useState } from 'react';
import { addProduct } from '../utils/firebaseUtils';

const CreateItem = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setIsLoading(true);

    addProduct()
      .then((res) => console.log(res))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <button onClick={handleClick}>Add new product</button>
      {isLoading ? <p>Adding product...</p> : null}
      {error ? <p>Unable to add product. Please, try again.</p> : null}
    </div>
  );
};

export default CreateItem;
