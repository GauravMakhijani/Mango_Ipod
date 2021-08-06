import React from "react";
import Menu from "./Screens/Menu";

class Screen extends React.Component {
  render() {
    const { options } = this.props;
    return (
      <div className="screen-container">
        <Menu options={options} />
      </div>
    );
  }
}

export default Screen;
