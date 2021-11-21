import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  useLocalStorage,
  LOCAL_STORAGE_LIST_TOKEN,
} from '../../hooks/useLocalStorage';
import { isTokenValid } from '../../utils/firebaseUtils';
import Button from '../button';

import './styles.css';

export const JoinList = () => {
  const [listToken, setListToken] = useState('');
  const [checkingToken, setCheckingToken] = useState(false);
  const [errorAuth, setErrorAuth] = useState(false);
  const history = useHistory();
  const { setValue } = useLocalStorage(LOCAL_STORAGE_LIST_TOKEN);

  const handleTokenChange = (e) => {
    setListToken(e.target.value);
    setErrorAuth(false);
  };

  const retrieveList = async (e) => {
    e.preventDefault();
    setCheckingToken(true);
    const isValid = await isTokenValid(listToken);
    setCheckingToken(false);

    if (isValid) {
      setValue(listToken);
      history.push('/list');
    } else {
      setListToken('');
      setErrorAuth(true);
    }
  };

  return (
    <form onSubmit={retrieveList}>
      <label className="share-token" htmlFor="productName">
        Share token
        <input
          className="input-item"
          id="productName"
          name="productName"
          type="text"
          placeholder="Token"
          value={listToken}
          onChange={handleTokenChange}
          style={{ marginTop: '8px' }}
          required
        />
      </label>

      <Button type="submit" className="welcome-button link">
        Join an existing list
      </Button>
      {checkingToken ? <p>Checking token...</p> : null}
      {errorAuth ? (
        <p className="errorAuth">
          Token invalid, try again or create a new list !
        </p>
      ) : null}
    </form>
  );
};
