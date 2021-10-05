import { useProducts } from '../hooks/useProducts';

const CreateItem = () => {
  const { addProduct } = useProducts();

  const handleClick = async () => {
    await addProduct();
  };

  return <button onClick={handleClick}>Add new product</button>;
};

export default CreateItem;
