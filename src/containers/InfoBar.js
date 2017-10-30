import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';  

import * as actions from '../actions/actions-test';

class InfoBar extends Component{

  render(){
    if(!true){
      return(
        <div>Loading footer...</div>
      );
    }

    return(
      <footer className="app-footer">
        <h3 className="info-bar">Information Bar</h3>
      </footer>
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
export default connect(mapStateToProps, mapDispatchToProps)(InfoBar);