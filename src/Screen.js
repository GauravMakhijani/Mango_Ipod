import React from "react";
import Menu from "./Screens/Menu";
import Game from "./Screens/Game";
import Setting from "./Screens/Settings";
import Coverflow from "./Screens/Coverflow";
class Screen extends React.Component {
  render() {
    const { options, selected, showPage } = this.props;

    return (
      <div className="screen-container">
        <Menu options={options} selected={selected} />
        {showPage === 0 && options.length === 4 ? <Game /> : ""}
        {showPage === 2 && options.length === 4 ? <Setting /> : ""}
        {showPage === 3 && options.length === 4 ? <Coverflow /> : ""}
      </div>
    );
  }
}

export default Screen;
