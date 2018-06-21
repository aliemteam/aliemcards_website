import * as React from 'react';
import axios from 'axios';

import config from '../config';
import { CardSummary } from '../types';

import Home from './Home';
import Loader from '../Loader/Loader';

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
      })
      .catch(() => ({
        status: 501,
        statusText: 'Server error encountered.',
      }));
  }

  render() { 
    return (
      <div>
        { this.state.recentlyAdded ? 
          <Home recentlyAdded={this.state.recentlyAdded} recentlyUpdated={this.state.recentlyUpdated} />
          : <Loader /> }
      </div>
    );
  }
}
