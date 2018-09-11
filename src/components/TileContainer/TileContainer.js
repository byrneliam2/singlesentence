import React, { Component } from 'react';
import './TileContainer.css';

class TileContainer extends Component {

  render() {
    return (
      <div className="slide" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }

}

export default TileContainer;