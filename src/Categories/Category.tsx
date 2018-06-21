import * as React from 'react';

import CardList from '../CardList/CardList';

import { Taxonomy } from '../types';

interface Props {
  cats: Taxonomy[],
  cat: string
}

export default class Category extends React.PureComponent<Props, {}> {
  render() {
    const cat = this.props.cats.find(cat => cat.slug === this.props.cat);
    return (
      <div>
        {cat ? <h1>{ cat.name }</h1> : <h2>Category Does Not Exist: {this.props.cat}</h2>}
        {cat && cat.cards && <CardList cards={ cat.cards } />}
    </div>
    );
  }
}
