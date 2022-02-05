import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './assets/css/styles.css';

const title = ' React Webpack Nazzgor';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
