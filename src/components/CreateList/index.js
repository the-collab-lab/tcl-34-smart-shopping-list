import { getToken } from '@the-collab-lab/shopping-list-utils';
import { useHistory } from 'react-router-dom';

export const CreateList = () => {
  let history = useHistory();
  const push = history.push;

  const generateToken = () => {
    const token = getToken();
    localStorage.setItem('token', token);
    push('/list');
  };

  return (
    <div className="container">
      {console.log(getToken())}

      <h1>
        Welcome to your <br />
        Smart Shopping list!
      </h1>
      <button onClick={generateToken}> Create a new list</button>
    </div>
  );
};
