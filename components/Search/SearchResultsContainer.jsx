import * as React from 'react';
import axios from 'axios';

import config from '../config';

import SearchResults from './SearchResults';

export default class SearchResultsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      loading: true
    }
  }

  handleAJAX() {
    axios({
      method: 'get',
      url: `${config.api.search}${encodeURI(this.props.query)}`,
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      console.log(res.data);
      this.props.loadStatus(false);
      this.setState({ loading: false, cards: res.data.cards });
    })
    .catch(() => ({
      status: 501,
      statusText: 'Server error encountered.',
    }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) this.handleAJAX();
  }

  componentDidMount() {
    this.handleAJAX();
  }

  render() { 
    return (
      <div className="search__results">
        { !this.state.loading && <SearchResults onClick={this.props.onClick} cards={this.state.cards} /> }
      </div>
    );
  }
}
