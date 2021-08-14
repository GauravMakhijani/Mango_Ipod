import React, { Component } from "react";

class PlayMusic extends Component {
  componentDidMount() {
    this.props.currentlyOnPlayMusicScreen();
    this.props.playPauseButtonClicked();
  }
  componentWillUnmount() {
    this.props.currentlyOnPlayMusicScreen();
  }
  render() {
    const { songIndex, Songs } = this.props;
    return (
      <div className="screen-music">
        <h2>{Songs[songIndex].name}</h2>
        <div className="song-image">
          <img
            src={
              "https://www.udiscovermusic.com/wp-content/uploads/2019/02/Best-Love-Songs-featured-image.jpg"
            }
            alt="song item"
          ></img>
        </div>
        <div style={{ marginTop: 20 }}>
          <audio
            controls="seeking"
            id="audio"
            src={Songs[songIndex].url}
          ></audio>
        </div>
        <div className="screen-music-instruction">
          <p>
            Press "<i className="fa fa-play"></i>/
            <i className="fa fa-pause"></i>" button to play/pause.
          </p>
        </div>
      </div>
    );
  }
}

export default PlayMusic;
