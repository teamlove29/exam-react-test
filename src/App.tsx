/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css'
import HomePage from './views/HomePage';
import PokemonPage from './views/PokemonPage';
import Function1Page from './views/Function1Page';
import { Route, Link, Switch, NavLink } from "react-router-dom";
import Function2Page from './views/Function2Page';
import Function3Page from './views/Function3Page';


const App = () => {


  return (
    <div>
      <div className="container bg-secondary p-4 mt-1 rounded">
        <h3 className="text-center text-light">Test Fontend</h3>
      </div>
      <div className="text-center mt-4">
        <NavLink exact to="/" className="m-2 main-nav" activeClassName="nav-active">Home</NavLink>
        <NavLink to="/pokemons" className="m-2 main-nav" activeClassName="nav-active">Pokemon</NavLink>
        <NavLink to="/function1" className="m-2 main-nav" activeClassName="nav-active">Function 1</NavLink>
        <NavLink to="/function2" className="m-2 main-nav" activeClassName="nav-active">Function 2</NavLink>
        <NavLink to="/function3" className="m-2 main-nav" activeClassName="nav-active">Function 3</NavLink>
      </div>

      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route path="/pokemons"><PokemonPage /></Route>
        <Route path="/function1"><Function1Page /></Route>
        <Route path="/function2"><Function2Page /></Route>
        <Route path="/function3"><Function3Page /></Route>
      </Switch>

    </div>
  );
}

export default App;
