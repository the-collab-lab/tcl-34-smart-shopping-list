import { getToken } from '@the-collab-lab/shopping-list-utils';
import { useHistory } from 'react-router-dom';
import {
  useLocalStorage,
  LOCAL_STORAGE_LIST_TOKEN,
} from '../../hooks/useLocalStorage';
import Button from '../button';

export const CreateList = () => {
  const { push } = useHistory();
  const { setValue } = useLocalStorage(LOCAL_STORAGE_LIST_TOKEN);

  const generateToken = () => {
    const token = getToken();
    setValue(token);
    push('/list');
  };

  return (
    <Button onClick={generateToken} className="welcome-button link">
      Create a new list
    </Button>
  );
};
