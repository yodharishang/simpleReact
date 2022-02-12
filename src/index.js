import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./redux/Store";
import App from './App';

import './Assets/Css/main.css';

ReactDOM.render(
 <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
