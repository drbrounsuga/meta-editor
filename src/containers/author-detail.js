import React, { Component } from 'react';
import { connect } from 'react-redux';

class AuthorDetail extends Component{

  render(){
    if(!this.props.author){
      return(
        <div>Not connected to store</div>
      );
    }

    return(
      <div>
        <div>Author: {this.props.author.name}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    author: state.author
  };
}

export default connect(mapStateToProps)(AuthorDetail);