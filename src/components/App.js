import React from 'react';
import Header from '../containers/header'
import '../style.css';
import Home from './home'
import Ressources from '../containers/ressources/ressources'
import { Route, Switch } from 'react-router-dom'
import RequireAuth from '../helpers/requireAuth'
import TodoApp from './todo-app'
import Signin from './signin'

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ressources" component={RequireAuth(Ressources)} />
          <Route exact path="/todo-app" component={TodoApp} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </div>
    </div>
  );
}

