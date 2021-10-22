import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  useLocalStorage,
  LOCAL_STORAGE_LIST_TOKEN,
} from '../../hooks/useLocalStorage';
import Button from '../button';

export const JoinList = () => {
  const history = useHistory();
  const { setValue } = useLocalStorage(LOCAL_STORAGE_LIST_TOKEN);
  const [listToken, setListToken] = useState('');

  const retrieveList = (e) => {
    e.preventDefault();
    setValue(listToken);
    history.push('/list');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setListToken(event.target.value);
    }
  };

  return (
    <form onSubmit={retrieveList} className="add-form">
      <label htmlFor="productName">
        Share token
        <input
          className="input-item"
          id="productName"
          name="productName"
          type="text"
          placeholder="Token"
          onKeyDown={handleKeyDown}
          value={listToken}
          onChange={(event) => setListToken(event.target.value)}
          style={{ marginTop: '8px' }}
          required
        />
      </label>

      <Button type="submit" className="welcome-button link">
        Join an existing list
      </Button>
    </form>
  );
};
