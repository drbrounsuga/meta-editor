import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/app';
import InfoBar from './containers/InfoBar';
import TitleBar from './containers/TitleBar';
import store from './store';

import './assets/styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="App">
        <TitleBar />
        <Route path="/:filter?" component={App} />
        <InfoBar />
      </div>
    </Router>
  </Provider>
  , document.querySelector('#root'));

