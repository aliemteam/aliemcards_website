import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, Category } from '../globals';

const style = require('./cardlist.sass');

interface Props {
  cards: Array<Pick<Card, 'categories' | 'id' | 'title'>>;
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
        <div key={card.id} className="card-list__item">
          <Link to={`/cards/${card.id}`} className="card-list__item-title">
            {card.title}
          </Link>{' '}
          {card.categories.map(category => (
            <Link
              to={`/categories/${category.id}`}
              key={`${card.id}-${category.id}`}
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
