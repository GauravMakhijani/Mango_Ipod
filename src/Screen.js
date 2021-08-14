import React from "react";
import Menu from "./Screens/Menu";
import Game from "./Screens/Game";
import Setting from "./Screens/Settings";
import Coverflow from "./Screens/Coverflow";
import Artists from "./Screens/Artists";
import Albums from "./Screens/Albums";
import AllSongs from "./Screens/AllSongs";
class Screen extends React.Component {
  render() {
    const {
      options,
      selected,
      showPage,
      currentMusicSelection,
      songIndex,
      currentlyOnPlayMusicScreen,
    } = this.props;
    console.log(selected);
    return (
      <div className="screen-container">
        <Menu options={options} selected={selected} />
        {showPage === 0 && options.length === 4 ? <Game /> : ""}
        {showPage === 2 && options.length === 4 ? <Setting /> : ""}
        {showPage === 3 && options.length === 4 ? <Coverflow /> : ""}
        {showPage === 0 && options.length === 3 ? (
          <AllSongs
            currentMusicSelection={currentMusicSelection}
            songIndex={songIndex}
            currentlyOnPlayMusicScreen={currentlyOnPlayMusicScreen}
            playPauseButtonClicked={this.props.playPauseButtonClicked}
          />
        ) : (
          ""
        )}
        {showPage === 1 && options.length === 3 ? <Artists /> : ""}
        {showPage === 2 && options.length === 3 ? <Albums /> : ""}
      </div>
    );
  }
}

export default Screen;
