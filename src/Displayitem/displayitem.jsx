import React, { Component } from 'react';
import '../App.css';

class Displayitem extends Component {
    render() {
      return (
        this.props.entries.map((entry,i) => <li key = {i}>{entry.text}</li>)
      );
    }
  }

export default Displayitem;
  