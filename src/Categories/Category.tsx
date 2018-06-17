import * as React from 'react';

import CardList from '../CardList/CardList';

import { Taxonomy } from '../types';

interface SingleCatProps {
  cats: Taxonomy[],
  match: {
    params: {
      cat: string;
    }
  }
}

export default class Category extends React.PureComponent<SingleCatProps, {}> {
  render() {
    const cat = this.props.cats.find(cat => cat.slug === this.props.match.params.cat);
    return (
      <div>
        {cat ? <h1>{ cat.name }</h1> : <h2>Category Does Not Exist: {this.props.match.params.cat}</h2>}
        {cat && cat.cards && <CardList cards={ cat.cards } />}
    </div>
    );
  }
}
