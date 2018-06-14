import * as React from 'react';
import axios from 'axios';

import config from '../config';
import { CardSummary } from '../types';

import CardList from '../components/CardList/CardList';

interface State {
  recentlyAdded: CardSummary[];
  recentlyUpdated: CardSummary[];
}

export default class Home extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      recentlyAdded: [],
      recentlyUpdated: []
    }
  }

  componentDidMount() {
    axios.get(config.api.recent)
      .then(res => {
        const recentlyAdded = res.data.created;
        const recentlyUpdated = res.data.updates;
        this.setState({ recentlyAdded, recentlyUpdated });
      });
  }

  render() { 
    return (
      <div className="row row--wrap">
        <div className="column column--50">
          <h1>New Cards</h1>
          <CardList cards={this.state.recentlyAdded} />
        </div>
        <div className="column column--50">
          <h1>Updated Cards</h1>
          <CardList cards={this.state.recentlyUpdated} />
        </div>
      </div>
    );
  }
}
