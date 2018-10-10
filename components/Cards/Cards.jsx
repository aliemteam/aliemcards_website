import * as React from 'react';

import CardListWithFilter from '../CardList/CardListWithFilter';

import * as cards from '../../apicache/summaries.json';
import * as cats from '../../apicache/categories.json';

const Cards = () => 
  <div>
    <CardListWithFilter cards={cards.card_summaries} taxonomy={cats.categories} />
  </div>;

export default Cards;
