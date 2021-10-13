import { getToken } from '@the-collab-lab/shopping-list-utils';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';

export const CreateList = () => {
  /*
  As our custom hook useLocalStorage receives 2 params
  itemName and initialValue we must pass them when using the hook

  itemName is how we are calling that portion of local storage in use
  initialValue is what data type we are going to store

  */

  const LOCAL_STORAGE = 'ITEM_LIST_V1';
  const [storedValue, setValue] = useLocalStorage(LOCAL_STORAGE, '');

  const generateToken = () => {
    const token = getToken();
    console.log(token);
    setValue(token);
  };
  return <button onClick={() => generateToken()}>create</button>;
};
