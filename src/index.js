import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Home/HomeContainer';
import Card from './Card/CardContainer';

// Base styles for whole app here
const style = require('./Sass/base.sass');

class App extends React.PureComponent {
  render() {
    return (
        <HashRouter>
          <div>
            <Header />
            <main className="content container" role="main">
              <Route path="/" exact component={Home} />
              <Route path="/cards" exact render={() => (<h1>CARDS</h1>)} />
              <Route path="/cards/:slug" component={Card} />
            </main>
            <Footer />
          </div>
        </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,  
  document.getElementById('app')
);
