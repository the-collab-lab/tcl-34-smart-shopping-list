import './styles.css';
import { Switch, Route, Link } from 'react-router-dom';

const Listar = () => <h1>Listar</h1>;
const Adicionar = () => <h1>Adicionar</h1>;

export function Filters() {
  return (
    <Switch>
      <Route exact path="/listar">
        <Listar />
      </Route>
      <Route path="/adicionar">
        <Adicionar />
      </Route>
      <div className="div-button">
        <button className="button">
          <Link className="link-button" to="/list">
            List
          </Link>
        </button>
        <button className="button">
          <Link className="link-button" to="/add-item">
            Add Item
          </Link>
        </button>
      </div>
    </Switch>
  );
}
