import * as React from 'react';

import CardList from '../CardList/CardList'
import { Card } from '../globals'

interface Props {
  data: {
    recentlyAdded: Array<Pick<Card, 'id' | 'title' | 'categories' | 'updates'>>;
    recentlyUpdated: Array<Pick<Card, 'id' | 'title' | 'categories' | 'updates'>>;
  };
}

export default class Home extends React.PureComponent<Props, {}> {
  render() {
    // const newest = this.props.data.recentlyAdded || [];
    // const updated = this.props.data.recentlyUpdated || [];
    const newest = [];
    const updated = [];    
    return (
      <div className="row row--wrap">
        <div className="column column--50">
          <h1>New Cards</h1>
          {newest.length > 0 && <CardList cards={newest} />}
        </div>
        <div className="column column--50">
          <h1>Updated Cards</h1>
          {updated.length > 0 && <CardList cards={updated} />}
        </div>
      </div>
    );
  }
}
