import { getToken } from '@the-collab-lab/shopping-list-utils';
import { useHistory } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { createListToken } from '../../utils/firebaseUtils';
import Button from '../button';

export const CreateList = () => {
  const { push } = useHistory();
  const { setValue } = useLocalStorage();

  const generateToken = () => {
    const token = getToken();
    setValue(token);
    createListToken(token);
    push('/list');
  };

  return (
    <Button onClick={generateToken} className="welcome-button link">
      Create a new list
    </Button>
  );
};
