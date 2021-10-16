import { getToken } from '@the-collab-lab/shopping-list-utils';
import { useHistory } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const CreateList = () => {
  const { push } = useHistory();

  const LOCAL_STORAGE = 'ITEM_LIST_V1';
  const [setValue] = useLocalStorage(LOCAL_STORAGE, '');

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
