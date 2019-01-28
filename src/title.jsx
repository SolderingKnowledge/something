import React, { Component } from 'react';

/*
function Title(props) {
  return <p>{props.property}: {props.value} </p>
}
*/

class Title extends Component {
  render() {
    return <p>{this.props.property}: {this.props.value} </p>
  }
}

export default Title;
