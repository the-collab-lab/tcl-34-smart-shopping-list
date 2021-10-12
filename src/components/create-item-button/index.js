import { useState } from 'react';
import { addProduct } from '../../utils/firebaseUtils';
import InputItem from '../input-item';

const CreateItemButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setIsLoading(true);

    addProduct()
      .then((value) => console.log(value))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <InputItem />
      <button className="link" onClick={handleClick}>
        Add Item
      </button>
      {isLoading ? <p>Adding product...</p> : null}
      {error ? <p>Unable to add product. Please, try again.</p> : null}
    </div>
  );
};

export default CreateItemButton;
