import * as React from 'react';

import CardList from '../CardList/CardList';

export default (props) => 
  <div>
    <h1>{ props.cat.name }</h1>
    <CardList cards={ props.cat.cards } />
  </div>;
