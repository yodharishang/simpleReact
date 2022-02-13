import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./redux/Store";

import { AppContainer } from 'react-hot-loader';

import App from './App';

import './Assets/Css/main.css';

ReactDOM.render(
 <Provider store={store}>
 <AppContainer>
  <App />
    </AppContainer>
  </Provider>,
  document.getElementById('app')
);

if(module.hot){

    module.hot.accept('./App', () => {
    
    const NextApp = require('./App').default; 
    
    ReactDOM.render(
    <AppContainer>
    <NextApp />
    </AppContainer>,
    document.getElementById('app')
    );
    
    });
}
