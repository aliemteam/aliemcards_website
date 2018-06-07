import * as React from 'react';
import { Route } from 'react-router-dom';

//import SearchResults from './SearchResults';

// use require for non-javascript imports so TS isn't angry
const loader = require('./loader.svg');
const style = require('./search.sass');

interface Props {}

interface State {
  loading: boolean;
  query: string;
  uiQuery: string;
}

const splash = () => (
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

export default class Search extends React.PureComponent<Props, State> {
  static timer;

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      query: '',
      uiQuery: '',
    };
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
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

  handleLoadingStatus = (status: number) => {
    if (status > 6) {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className="search">
        
        <div className="search__input" role="search">
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Search"
            aria-label="Search for cards"
            value={this.state.uiQuery}
          />
          {this.state.loading && (
            <img className="search__loader" src={loader} alt="loader" />
          )}
        </div>
        {/* <SearchResults
          query={this.state.query}
          onClick={this.handleClick}
          loadStatus={this.handleLoadingStatus}
        /> */}
      </div>
    );
  }
}
