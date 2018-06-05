import React from 'react';
import ReactDOM from 'react-dom';

import './test.sass';

const title = 'ALiEM Cards';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

// module.hot.accept();