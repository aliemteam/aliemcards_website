import * as React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import Categories from './Categories';
import Category from './Category';
import Loader from '../Loader/Loader';

import config from '../config';
import { CardSummary, Taxonomy } from '../types';

interface State {
  cards: CardSummary[],
  cats: Taxonomy[] | null
}

class CategoriesContainer extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      cats: null
    }
  }

  componentDidMount() {
    axios.get(`${config.api.categories}`)
      .then(res => {
        console.log(res.data);
        this.setState({ cats: res.data.categories });
      })
      .catch(() => ({
        status: 501,
        statusText: 'Server error encountered.',
      }));
  }

  render() { 
    return (
      <div>
        {this.state.cats ? 
          <Route path="/categories" exact render={(props) => <Categories {...props} categories={this.state.cats} />} /> 
          : <Loader />
        }
        <Route path="/categories/:cat" exact render={(props) => <Category {...props} cats={this.state.cats} />} />
      </div>
    );
  }
}

export default withRouter(CategoriesContainer);
