import React, { Component } from "react";

class MenuItems extends Component {
  render() {
    const { options } = this.props;
    return (
      <React.Fragment>
        {options.map((item) => {
          return (
            <div>
              <p>{item}</p>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default MenuItems;
