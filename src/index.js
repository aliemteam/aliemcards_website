import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/HomeContainer';
import Card from './Card/CardContainer';
import Cards from './Cards/CardsContainer';
import Categories from './Categories/CategoriesContainer';
import About from './About/About';
import FourOhFour from './404/404';
import Contact from './Contact/Contact';

// Base styles for whole app here
const style = require('./Sass/base.sass');

// https://reacttraining.com/react-router/web/guides/scroll-restoration
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

const ScrollToTopWithRouter = withRouter(ScrollToTop);

class App extends React.Component {
  render() {
    return (
        <HashRouter>
          <ScrollToTopWithRouter>
            <div className="row--stacked">
              <Header />
              <main className="content container" role="main">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/cards" exact component={Cards} />
                  <Route path="/cards/:slug" exact component={Card} />
                  <Route path="/categories" exact component={Categories} />
                  <Route path="/categories/:cat" component={Categories} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route exact component={FourOhFour} />
                </Switch>
              </main>
              <Footer />
            </div>
          </ScrollToTopWithRouter>
        </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,  
  document.getElementById('app')
);
