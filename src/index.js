import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/HomeContainer';
import Card from './Card/CardContainer';
import Cards from './Cards/CardsContainer';
import Categories from './Categories/CategoriesContainer';

// Base styles for whole app here
const style = require('./Sass/base.sass');

class App extends React.Component {
  render() {
    return (
        <HashRouter>
          <div>
            <Header />
            <main className="content container" role="main">
              <Route path="/" exact component={Home} />
              <Route path="/cards" exact component={Cards} />
              <Route path="/cards/:slug" exact component={Card} />
              <Route path="/categories" component={Categories} />
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
