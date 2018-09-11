import React, { Component } from 'react';
import './Label.css';

class Label extends Component {

  render() {
    return (
      <div className="label">
        {this.props.text}
      </div>
    );
  }

}

export default Label;