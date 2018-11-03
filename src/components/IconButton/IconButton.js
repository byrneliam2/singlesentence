import React, { Component } from 'react';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import './IconButton.css';

const SIZE = "2em";

class IconButton extends Component {

  getIcon() {
    switch (this.props.name) {
      case "add":
        return <IoMdAdd size={SIZE}/>;
      case "search":
        return <IoMdSearch size={SIZE}/>;
      default:
        return undefined;
    }
  }

  render() {
    return (
      <div className="iconButton">
        {this.getIcon()}
      </div>
    );
  }

}

export default IconButton;