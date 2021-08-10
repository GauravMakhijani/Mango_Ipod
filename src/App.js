import "./App.css";
import Button from "./Button";
import React from "react";
import Screen from "./Screen";
import $ from "jquery";
import ZingTouch from "zingtouch";
import firebase from "./firebase";

class App extends React.Component {
  constructor() {
    super();
    this.temp_change_in_angle = 0;
    this.temp_selected = 0;
    this.state = {
      options: ["Games", "Music", "Settings", "Coverflow"],
      selected: 0,
      showPage: -1,
      general_menu: ["Games", "Music", "Settings", "Cover Flow"],
      songs_sub_menu: ["All Songs", "Artists", "Albums"],
      current_music_selection: 0,
      song_index: -1,
      currently_on_play_music_screen: false,
    };
  }
  componentDidMount() {
    var zt = new ZingTouch.Region(
      document.getElementsByClassName("buttons-container")[0]
    );
    zt.bind(
      document.getElementsByClassName("buttons-container")[0],
      "rotate",
      (event) => {
        if (
          document
            .getElementsByClassName("screen-menu")[0]
            .classList.contains("width-50")
        ) {
          //this rotating facility will only be available when the side bar is shown to the user.
          let dist = event.detail.distanceFromLast;
          this.temp_change_in_angle += dist;
          if (this.temp_change_in_angle > 60) {
            this.temp_selected++;
            this.temp_selected = this.temp_selected % this.state.options.length;
            this.setState({
              selected: this.temp_selected,
            });

            this.temp_change_in_angle = 0;
          } else if (this.temp_change_in_angle < -60) {
            this.temp_selected--;
            if (this.temp_selected === -1)
              this.temp_selected = this.state.options.length - 1;

            this.temp_selected = this.temp_selected % this.state.options.length;
            this.setState({
              selected: this.temp_selected,
              // song_index: -1
            });
            this.temp_change_in_angle = 0;
          }
        }
      }
    );
  }
  handleMenuPress = () => {
    let screenMenuClassList =
      document.getElementsByClassName("screen-menu")[0].classList;
    if (screenMenuClassList.contains("width-50")) {
      $(".screen-menu").removeClass("width-50"); //hide menu
    } else {
      $(".screen-menu").addClass("width-50"); //show menu
    }
  };
  handleSelectPress = () => {
    let screenMenuClassList =
      document.getElementsByClassName("screen-menu")[0].classList;

    if (screenMenuClassList.contains("width-50")) {
      // $(".screen-menu").removeClass("width-50"); //hide menu
      if (this.state.selected === 1 && this.state.options.length === 4) {
        this.setState({
          options: this.state.songs_sub_menu,
          selected: 0,
          showPage: -1,
          // song_index: -1, //we dont want to play any song
        });
        this.temp_selected = 0;
        return;
      }
      this.setState({
        showPage: this.state.selected,
      });
      $(".screen-menu").removeClass("width-50"); //hide menu
    } else {
      if (this.state.selected === 0 && this.state.options.length === 3) {
        return;
      }
      $(".screen-menu").addClass("width-50"); //show menu
    }
  };
  handleRightPress = () => {
    let screenMenuClassList =
      document.getElementsByClassName("screen-menu")[0].classList;

    if (screenMenuClassList.contains("width-50")) {
      return;
    } else {
      if (this.state.options.length === 3) {
        //I must be on the music section
        if (this.state.showPage === 0) {
          //I am on all songs page
          if (this.state.current_music_selection === 5)
            //If I am playing the music at 5th index then I will need to reduce the index to 0 on next right button click.
            this.setState({
              current_music_selection: 0,
              song_index: -1,
            });
          else
            this.setState({
              current_music_selection: this.state.current_music_selection + 1,
              song_index: -1,
            });
        }
      }
    }
  };
  handleLeftPress = () => {
    let screenMenuClassList =
      document.getElementsByClassName("screen-menu")[0].classList;

    if (screenMenuClassList.contains("width-50")) {
      if (this.state.options.length === 3) {
        this.setState({
          options: this.state.general_menu,
          selected: 0,
          showPage: -1,
          // song_index: -1, //we dont want to play any song
        });
        this.temp_selected = 0;
        return;
      }
    } else {
      if (this.state.options.length === 3) {
        //I must be on the music section
        if (this.state.showPage === 0) {
          //I am on all songs page
          if (this.state.current_music_selection === 0)
            //If I am playing the music at 5th index then I will need to reduce the index to 0 on next right button click.
            this.setState({
              current_music_selection: 5,
              song_index: -1,
            });
          else
            this.setState({
              current_music_selection: this.state.current_music_selection - 1,
              song_index: -1,
            });
        }
      }
    }
  };
  handlePausePress = () => {
    // let screenMenuClassList =
    //   document.getElementsByClassName("screen-menu")[0].classList;
    // if (screenMenuClassList.contains("width-50")) {
    //   $(".screen-menu").removeClass("width-50"); //hide menu
    // } else {
    //   $(".screen-menu").addClass("width-50"); //show menu
    // }
    console.log("done");
  };

  render() {
    const { options, selected, showPage } = this.state;
    //console.log(options);
    return (
      <div className="App">
        <Screen
          options={options}
          selected={selected}
          showPage={showPage}
          currentMusicSelection={this.state.current_music_selection}
          songIndex={this.state.song_index}
          currentlyOnPlayMusicScreen={this.currentlyOnPlayMusicScreen}
        />
        <Button
          onMenuPress={this.handleMenuPress}
          onSelectPress={this.handleSelectPress}
          onRightPress={this.handleRightPress}
          onLeftPress={this.handleLeftPress}
          onPausePress={this.handlePausePress}
        />
      </div>
    );
  }
}

export default App;
