import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';  

import * as actions from '../actions/actions-test';

class Test extends Component{

  render(){
    if(!this.props.test){
      return(
        <div>Not connected to store</div>
      );
    }

    let onAdd = val => this.props.addValue(val);
    let onSubtract = val => this.props.subtractValue(val);
    let onAsync = val => this.props.incrementAsync();

    return(
      <div>
        <div>Test Value: {this.props.test.test}</div>
        <p><button onClick={() => onAdd(2)}>++</button></p>
        <p><button onClick={() => onSubtract(1)}>-</button></p>
        <p><button onClick={() => onAsync()}>Async</button></p>
      </div>
    );
  }
}

// map data from state to props of this component
const mapStateToProps = state => {

  return{
    test: state.test
  };
  
}

// map dispatcher functions to the props of this component
const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    addValue: actions.addValue,
    subtractValue: actions.subtractValue,
    incrementAsync: actions.incrementAsync
  }, dispatch);

}

// connect the props and dispatchers
export default connect(mapStateToProps, mapDispatchToProps)(Test);