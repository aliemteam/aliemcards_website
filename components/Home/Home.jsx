import * as React from 'react';

import CardList from '../CardList/CardList';

const Home = (props) => (
  <div className="row row--wrap">
    <div className="column column--50">
      <h1>New Cards</h1>
      <CardList cards={props.created} />
    </div>
    <div className="column column--50">
      <h1>Updated Cards</h1>
      <CardList cards={props.updates} />
    </div>
  </div>
);

export default Home;
