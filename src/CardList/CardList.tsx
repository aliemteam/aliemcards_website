import * as React from 'react';
import { Link } from 'react-router-dom';

import { CardSummary } from '../types';

const style = require('./cardlist.sass');

interface Props {
  cards: CardSummary[];
}

const CardList = (props:Props) => (
  <div className="card-list">
    {props.cards.map(card => (
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
);

export default CardList;
