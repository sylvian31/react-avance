import React from 'react';
import Header from '../containers/header'
import '../style.css';
import Home from './home'
import Ressources from './ressources'
import { Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ressources" component={Ressources} />
      </Switch>
    </div>
  );
}

