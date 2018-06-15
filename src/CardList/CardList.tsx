import * as React from 'react';
import { Link } from 'react-router-dom';

import { CardSummary, Taxonomy } from '../types';

const style = require('./cardlist.sass');

interface Props {
  cards: CardSummary[];
  categories?: Taxonomy[];
  filter?: boolean;
}

interface State {
  categoryFilter: string;
}

export default class CardList extends React.PureComponent<Props, State> {
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
        {this.props.filter && this.props.categories && (
          <select value={this.state.categoryFilter} onChange={this.handleChange}>
            <option value="">Filter by Category:</option>
            <option value="">All Cards</option>
            {this.props.categories.map(category => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        )}
        <div className="card-list">
          {filterCards.map(card => (
            <div key={card.slug} className="card-list__item">
              <Link to={`/cards/${card.slug}`} className="card-list__item-title">
                {card.title}
              </Link>{' '}
              {card.categories.map(category => (
                <Link
                  to={`/categories/${category.slug}`}
                  key={`${card.slug}-${category.slug}`}
                  className="card-list__item-meta"
                >
                  {category.name.toLowerCase()}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
