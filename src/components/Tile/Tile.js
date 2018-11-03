import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {

  render() {
    return (
      <a href="/">
        <div className="tile">
          {this.props.children}
        </div>
      </a>
    );
  }

}

export default Tile;