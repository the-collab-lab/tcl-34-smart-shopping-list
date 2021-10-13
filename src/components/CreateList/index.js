import { getToken } from '@the-collab-lab/shopping-list-utils';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useHistory } from 'react-router-dom';

export const CreateList = () => {
  let history = useHistory();
  const push = history.push;

  const LOCAL_STORAGE = 'ITEM_LIST_V1';
  const [storedValue, setValue] = useLocalStorage(LOCAL_STORAGE, '');

  const generateToken = () => {
    const token = getToken();
    setValue(token);
    push('/list');
  };
  return (
    <div className="container">
      <button onClick={generateToken}> Create a new list</button>
    </div>
  );
};
