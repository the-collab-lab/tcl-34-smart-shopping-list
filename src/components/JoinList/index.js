import { useState } from 'react';
import { useHistory } from 'react-router-dom';


export const JoinList = () => {
  const history = useHistory();
  const [listToken, setListToken] = useState('');
  const [listTokenError, setListTokenError] = useState('');
  const tokensRef = firestore.collection('listToken');


  const verifyToken = (e) => {
    e.preventDefault();
    tokensRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === listToken) {
            localStorage.setItem('token', listToken);
            history.push('/list');
          } else {
            setListTokenError('Invalid token');
          }
        });
      })
      .catch((err) => console.log('Error message: ', err));
  };


  return (
    <>
      <div>

            <form onSubmit={verifyToken}>
              <input
                required
                name="token"
                placeholder="Enter a token"
                value={listToken}
                onChange={(e) => setListToken(e.target.value)}>
                </input>
              {listTokenError && (
                <p>
                  Token is not found. Please try again.
                </p>
              )}
            
                <button>
                  type="submit"
                  clickFunction={verifyToken}
                  btnText="Join an existing list"
                </button>
            </form>
      </div>
    </>
  );
};
