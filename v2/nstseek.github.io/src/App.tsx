import React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/inicio'>
          <span>Principal</span>
        </Route>
        <Route path='/sobre'>
          <span>Sobre</span>
        </Route>
        <Route path='/repositorio'>
          <span>Repositório</span>
        </Route>
        <Route path='/paginas'>
          <span>Páginas</span>
        </Route>
        <Route path='/contato'>
          <span>Contato</span>
        </Route>
        <Route path='/rotas'>
          <Link to='/inicio'>
            <span>xama no inicio</span>
          </Link>
          <Link to='/sobre'>
            <span>xama no sobre</span>
          </Link>
          <Link to='/repositorio'>
            <span>xama no repositorio</span>
          </Link>
          <Link to='/paginas'>
            <span>xama nas paginas</span>
          </Link>
          <Link to='/contato'>
            <span>xama no contato</span>
          </Link>
        </Route>
        <Route path='*'>
          <Redirect to='/rotas'/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
