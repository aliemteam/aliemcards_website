import * as React from 'react';
import Link from 'next/link';

import './cardlist.sass';

const CardList = (props) => (
  <div className="card-list">
    {props.cards.map(card => (
      <div key={card.slug} className="card-list__item">
        <Link
          href={`/card?slug=${card.slug}`}
          as={`/cards/${card.slug}`}>
          <a className="card-list__item-title">{card.title}</a>
        </Link>{' '}
        {card.categories.map(category => (
          <Link
            href={`/category?slug=${category.slug}`}
            as={`/categories/${category.slug}`}
            key={`${card.slug}-${category.slug}`}
          >
            <a className="card-list__item-meta">{category.name.toLowerCase()}</a>
          </Link>
        ))}
      </div>
    ))}
  </div>
);

export default CardList;
