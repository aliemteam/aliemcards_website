import * as React from 'react';

import { CardSummary } from '../types';

import CardList from '../CardList/CardList';

interface props {
  recentlyAdded: CardSummary[];
  recentlyUpdated: CardSummary[];
}

const Home = (props: props) => (
  <div className="row row--wrap">
    <div className="column column--50">
      <h1>New Cards</h1>
      <CardList cards={props.recentlyAdded} />
    </div>
    <div className="column column--50">
      <h1>Updated Cards</h1>
      <CardList cards={props.recentlyUpdated} />
    </div>
  </div>
);

export default Home;
