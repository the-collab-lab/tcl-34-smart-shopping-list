import { getToken } from '@the-collab-lab/shopping-list-utils';
import { useLocalStorage } from '../../hooks/useLocalStorage';
export const CreateList = () => {
  const LOCAL_STORAGE = 'ITEM_LIST_V1';
  const [storedValue, setValue] = useLocalStorage(LOCAL_STORAGE, '');
  const generateToken = () => {
    const token = getToken();
    console.log(token);
    setValue(getToken());
  };
  return <button onClick={() => generateToken()}>create</button>;
};
