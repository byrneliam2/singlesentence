import React, { Component } from 'react';
import './Label.css';

class Label extends Component {

  render() {
    return (
      <div className={this.props.type} style={{
        backgroundColor: this.props.bg,
        color: this.props.fg  
      }}>
        {this.props.text}
      </div>
    );
  }

}

export default Label;