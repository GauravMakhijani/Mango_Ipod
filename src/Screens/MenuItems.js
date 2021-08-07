import React, { Component } from "react";

class MenuItems extends Component {
  render() {
    const { options, selected } = this.props;
    return (
      <React.Fragment>
        {options.map((item, index) => {
          return (
            <div className={selected === index ? "selected" : ""} key={index}>
              <p>{item}</p>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default MenuItems;
