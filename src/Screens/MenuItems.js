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
        {options.length === 3 ? (
          <div style={{ color: "green" }}>
            <p style={{ fontSize: 18 }}>
              click "<i className="fa fa-backward"></i>" to go back
            </p>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default MenuItems;
