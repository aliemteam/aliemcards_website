import * as React from 'react';
import { withRouter } from 'next/router';

import SearchResults from './SearchResultsContainer';

const style = require('./search.sass');

const Splash = () => (
  <div className="search__splash-text">
    <div>A Point-of-Care Reference Library</div>
    <div>
      formerly known as <em>Paucis Verbis Cards</em>
      <br />
      by the{' '}
      <a href="https://aliem.com" target="_blank" rel="noopener noreferrer">
        ALiEM Team
      </a>{' '}
      and contributors
    </div>
  </div>
);

class Search extends React.PureComponent {
  static timer;

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      query: '',
      uiQuery: '',
    };
  }

  handleChange = (e) => {
    clearTimeout(Search.timer);
    const query = e.currentTarget.value;

    // Query is being performed. Update `uiQuery` immediately, but throttle
    // the update of `query` (and the associated api call) 500ms.
    if (query !== '') {
      Search.timer = setTimeout(() => {
        this.setState({ query: this.state.uiQuery });
      }, 500);
      this.setState({ uiQuery: query, loading: true });
    } else {
      // Query is empty. Reset state.
      this.setState({ uiQuery: query, loading: false, query });
    }
  };

  handleClick = () => {
    this.setState({ query: '', uiQuery: '', loading: false });
  };

  handleLoadingStatus = (loading) => {
      this.setState({ loading });
  };

  render() {
    return (
      <div className="search">
        { this.props.router.pathname === '/' ? <Splash /> : null }
        <div className="search__input" role="search">
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Search"
            aria-label="Search for cards"
            value={this.state.uiQuery}
          />
          {this.state.loading && (
            <img className="search__loader" src='/static/loader.svg' alt="loader" />
          )}
        </div>
        { this.state.query && (<SearchResults
          query={this.state.query}
          onClick={this.handleClick}
          loadStatus={this.handleLoadingStatus}
        />)}
      </div>
    );
  }
}

export default withRouter(Search);
