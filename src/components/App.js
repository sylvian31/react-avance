import React from 'react';
import Header from '../containers/header'
import '../style.css';
import Home from './home'
import Ressources from './ressources'
import { Route, Switch } from 'react-router-dom'
import RequireAuth from '../helpers/requireAuth'
import TodoApp from './todo-app'

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ressources" component={RequireAuth(Ressources)} />
          <Route exact path="/todo-app" component={TodoApp} />
        </Switch>
      </div>
    </div>
  );
}

