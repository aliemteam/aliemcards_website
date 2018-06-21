import * as React from 'react';
import axios from 'axios';

import config from '../config';
import { CardSummary, Taxonomy } from '../types';

import CardListWithFilter from '../CardList/CardListWithFilter';
import Loader from '../Loader/Loader';

interface State {
  cards: CardSummary[] | null,
  cats: Taxonomy[] | null
}

export default class HomeContainer extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      cards: null,
      cats: null
    }
  }

  componentDidMount() {
    axios.get(config.api.summaries)
      .then(res => {
        this.setState({ cards: res.data.card_summaries });
      })
      .catch(() => ({
        status: 501,
        statusText: 'Server error encountered.',
      }));
    
    axios.get(config.api.categories)
      .then(res => {
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
        { this.state.cards && this.state.cats ? 
          <CardListWithFilter cards={this.state.cards} taxonomy={this.state.cats} /> 
          : <Loader />
        }
      </div>
    );
  }
}
