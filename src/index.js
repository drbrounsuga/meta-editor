import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

import './assets/styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#root'));

registerServiceWorker();
