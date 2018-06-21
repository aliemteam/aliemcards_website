import * as React from 'react';
import axios from 'axios';

import Categories from './Categories';
import Category from './Category';
import Loader from '../Loader/Loader';

import config from '../config';
import { CardSummary, Taxonomy } from '../types';

interface Props {
  match: {
    params: {
      cat?: string;
    }
  }
}

interface State {
  cards: CardSummary[],
  cats: Taxonomy[] | null
}

export default class CategoriesContainer extends React.Component<Props, State> {
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
        {!this.props.match.params.cat && this.state.cats && 
          <Categories categories={this.state.cats} />
        }
        {this.props.match.params.cat && this.state.cats &&
          <Category cats={this.state.cats} cat={this.props.match.params.cat} />
        }
        {!this.state.cats &&
          <Loader />
        }
      </div>
    );
  }
}
