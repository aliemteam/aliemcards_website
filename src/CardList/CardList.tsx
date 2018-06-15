import * as React from 'react';
import { Link } from 'react-router-dom';
import { CardSummary, Category } from '../types';

const style = require('./cardlist.sass');

interface Props {
  cards: CardSummary[];
  categories?: Category[];
  filter?: boolean;
  filterhandler?: (e: React.ChangeEvent<any>) => void;
  filtervalue?: string;
}

export default ({
  cards = [],
  categories = [],
  filter = false,
  filterhandler,
  filtervalue = '',
}: Props) => (
  <div>
    {filter &&
      categories.length > 0 && (
        <select value={filtervalue} onChange={filterhandler}>
          <option value="">Filter by Category:</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      )}
    <div className="card-list">
      {cards.map(card => (
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
