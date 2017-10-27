import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectAuthor } from '../actions/actions_index';

class AuthorDetail extends Component{

  render(){
    if(!this.props.author){
      return(
        <div>Not connected to store</div>
      );
    }

    let onUpdateAuthor = author => this.props.onUpdateAuthor(author);

    return(
      <div>
        <div>Author: {this.props.author.name}</div>
        <p><button onClick={() => onUpdateAuthor('Batman')}>Batman</button></p>
        <p><button onClick={() => onUpdateAuthor('LaVaughn Haynes')}>LaVaughn Haynes</button></p>
      </div>
    );
  }
}

// map data from state to props of this component
const mapStateToProps = state => {
  return{
    author: state.author
  };
}

// map dispatcher functions to the props of this component
const mapDispatchToProps = dispatch => {
  return {
    onUpdateAuthor: name => {
      dispatch(selectAuthor(name));
    }
  }
}

// connect the props and dispatchers
export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetail);