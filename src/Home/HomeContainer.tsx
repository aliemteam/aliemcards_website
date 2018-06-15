import * as React from 'react';
import axios from 'axios';

import config from '../config';
import { CardSummary } from '../types';

import Home from './Home';

interface State {
  recentlyAdded: CardSummary[];
  recentlyUpdated: CardSummary[];
}

export default class HomeContainer extends React.PureComponent<{}, State> {
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
      <div>
        { this.state.recentlyAdded ? 
          <Home recentlyAdded={this.state.recentlyAdded} recentlyUpdated={this.state.recentlyUpdated} />
          : null }
      </div>
    );
  }
}
