import React, { Component } from 'react';

import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

import AuthorDetail from '../containers/author-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <AuthorDetail />
        
      </div>
    );
  }
}

export default App;