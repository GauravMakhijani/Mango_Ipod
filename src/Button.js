import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="buttons-container">
        <button className="center-circle">
          <h2>Select</h2>
        </button>
        <button className="menu-button">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <button className="left-button">
          left
          <i className="fas fa-backward"></i>
        </button>
        <button className="right-button">
          right
          <i className="fas fa-forward"></i>
        </button>
        <button className="play-pause">
          play
          <i className="fas fa-play"></i>/<i className="fas fa-pause"></i>
        </button>
      </div>
    );
  }
}

export default Button;
