import React from 'react';
import FilterLink from './filterLink';

import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

import Test from '../containers/test';

const App = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>

      <Test />
      <p>
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
      </p>
    </div>
  );


export default App;