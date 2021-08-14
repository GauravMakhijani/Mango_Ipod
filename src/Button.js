import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="buttons-container">
        <button className="center-circle" onClick={this.props.onSelectPress}>
          <h2>Select</h2>
        </button>
        <button className="menu-button" onClick={this.props.onMenuPress}>
          <i className="fa fa-bars"></i>
        </button>
        <button className="left-button" onClick={this.props.onLeftPress}>
          <i className="fa fa-backward"></i>
        </button>
        <button className="right-button" onClick={this.props.onRightPress}>
          <i className="fa fa-forward"></i>
        </button>
        <button
          className="play-pause"
          onClick={this.props.playPauseButtonClicked}
        >
          <i className="fa fa-play"></i>/<i className="fa fa-pause"></i>
        </button>
      </div>
    );
  }
}

export default Button;
