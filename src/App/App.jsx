import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../Header/Header';

// Base styles for whole app here
import '../Sass/base.sass';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}
