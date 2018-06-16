import * as React from 'react';

import CardList from './CardList';

import { CardSummary, Taxonomy } from '../types';

const style = require('./cardlist.sass');

interface Props {
  cards: CardSummary[];
  taxonomy: Taxonomy[];
}

interface State {
  categoryFilter: string;
}

export default class CardListWithFilter extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      categoryFilter: ''
    }
  }

  handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const category = e.currentTarget.value;
    this.setState({ categoryFilter: category });
  };

  render() {

    const category = this.state.categoryFilter;
    let filterCards = this.props.cards;

    if (category) {
      filterCards = filterCards.filter(
        card => card.categories.findIndex(c => c.slug === category) !== -1
      );
    }

    return (
      <div>
        {this.props.taxonomy && (
          <select value={this.state.categoryFilter} onChange={this.handleChange}>
            <option value="">Filter by Category:</option>
            <option value="">All Cards</option>
            {this.props.taxonomy.map(category => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        )}
        <CardList cards={filterCards} />
      </div>
    );
  }
}
