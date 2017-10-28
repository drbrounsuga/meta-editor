import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/app';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

import './assets/styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
  , document.querySelector('#root'));

registerServiceWorker();
