import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';  

import * as actions from '../actions/actions-test';
import '../assets/styles/title-bar.css';

class TitleBar extends Component{

  render(){
    if(!true){
      return(
        <div>Loading title bar... </div>
      );
    }

    return(
      <header className="title-bar">
        <h1>Title Bar</h1>
        <ul className="title-bar-buttons">
          <li><button title="Minimize" onClick={() => console.log('clicked')}>_</button></li>
          <li><button title="Maximize" onClick={() => console.log('clicked')}>O</button></li>
          <li><button title="Close" onClick={() => console.log('clicked')}>X</button></li>
        </ul>
      </header>
    );
  }
}

// map data from state to props of this component
const mapStateToProps = state => {

  return{};
  
}

// map dispatcher functions to the props of this component
const mapDispatchToProps = dispatch => {

  return bindActionCreators({
  }, dispatch);

}

// connect the props and dispatchers
export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);