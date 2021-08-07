import React, { Component } from "react";
import MenuItems from "./MenuItems";
class Menu extends Component {
  render() {
    const { options, selected } = this.props;
    return (
      <div className="screen-menu">
        <div className="app-logo">
          <h3>
            <i>MANGO POD</i>
          </h3>
        </div>
        <MenuItems options={options} selected={selected} />
      </div>
    );
  }
}

export default Menu;
