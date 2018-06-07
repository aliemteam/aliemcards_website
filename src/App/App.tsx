import * as React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';

// Base styles for whole app here
const style = require('../Sass/base.sass');

export default class App extends React.PureComponent {
  render() {
    return (
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/cards" render={() => (<h1>CARDS</h1>)} />
        </div>
    )
  }
}
