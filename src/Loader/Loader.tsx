import * as React from 'react';

const loader = require('./loader.svg');
const styles = require('./loader.sass');

const Loader = () => (
  <div className="card__loader">
    <img src={loader} alt="loading..." /><br />
    Loading...
  </div>
);

export default Loader;
