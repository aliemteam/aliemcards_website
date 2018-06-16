import * as React from 'react';
import axios from 'axios';

import config from '../config';
import { CardSummary, Taxonomy } from '../types';

import CardListWithFilter from '../CardList/CardListWithFilter';

interface State {
  cards: CardSummary[],
  cats: Taxonomy[]
}

export default class HomeContainer extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      cats: []
    }
  }

  componentDidMount() {
    axios.get(config.api.summaries)
      .then(res => {
        this.setState({ cards: res.data.card_summaries });
      });
    axios.get(config.api.categories)
      .then(res => {
        this.setState({ cats: res.data.categories });
      });
  }

  render() { 
    return (
      <div>
        { this.state.cards && this.state.cats ? 
          <CardListWithFilter cards={this.state.cards} taxonomy={this.state.cats} /> 
          : null 
        }
      </div>
    );
  }
}
