import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './Assets/Css/main.css';
const name = 'andre';
ReactDOM.render(
  <App name={name}/>,
  document.getElementById('app')
);

module.hot.accept();
