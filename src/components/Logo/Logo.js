import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <div>
        <div className="shapes">
          <div className="shape circle"></div>
          <div className="shape rectangle-a"></div>
          <div className="shape rectangle-b"></div>
          <div className="shape fullstop"></div>
        </div>
        <div className="text-container">
          <p className="heading">singlesentence.</p>
        </div>
      </div>
    );
  }
}

export default Logo;
