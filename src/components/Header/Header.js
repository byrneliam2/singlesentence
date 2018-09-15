import React, { Component } from 'react';
import './Header.css';

import { IconButton } from '../IconButton';
import { Logo } from '../Logo';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <Logo />
        </div>
        <IconButton name="add" />
        <IconButton name="search" />
      </div>
    );
  }

}

export default Header;