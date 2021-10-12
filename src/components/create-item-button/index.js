import { useState } from 'react';
import { addProduct } from '../../utils/firebaseUtils';
import InputItem from '../input-item';

const CreateItemButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formState, setFormState] = useState({
    productName: '',
    timeFrame: 7,
    date: null,
  });

  const handleClick = () => {
    setIsLoading(true);

    addProduct(formState)
      .then((res) => console.log(res))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  const handleForm = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div>
      <InputItem handleForm={handleForm} formState={formState} />
      <button className="link" onClick={handleClick}>
        Add Item
      </button>
      {isLoading ? <p>Adding product...</p> : null}
      {error ? <p>Unable to add product. Please, try again.</p> : null}
    </div>
  );
};

export default CreateItemButton;
