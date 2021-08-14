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
      change_in_angle: 0,
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
    if (
      this.state.currently_on_play_music_screen &&
      !document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("width-50")
    ) {
      //if i am currently on the play music screen and the side bar is hidden, in that case if i click on the select button, ideally nothing should happen.
      return;
    }
    if (this.state.selected === 1 && this.state.options.length === 4) {
      this.setState({
        options: this.state.songs_sub_menu,
        selected: 0,
        showPage: -1,
        song_index: -1, //we dont want to play any song
      });
      this.temp_selected = 0;
      return;
    }
    if (
      !document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("width-50")
    ) {
      //side menu is not visible
      if (this.state.options.length === 3) {
        //I must be on the music section
        if (this.state.showPage === 0) {
          //I am on all songs page
          if (this.state.song_index === -1) {
            //we are not on the music page
            this.setState({
              song_index: this.state.current_music_selection, //which song to play (here we want to play a song)
            });
            this.temp_selected = 0;
            return;
          }
        }
      }
    }
    this.setState({
      showPage: this.state.selected,
      song_index: -1, //we dont want to play any song
      selected: 0,
    });
    this.temp_selected = 0;
    this.handleMenuPress();
  };

  handleRightPress = () => {
    if (this.state.currently_on_play_music_screen) {
      //if i am on the play music screen
      if (
        !document
          .getElementsByClassName("screen-menu")[0]
          .classList.contains("width-50")
      ) {
        //if the menu is not present on the screen
        if ($("#audio")[0] !== undefined) {
          /* handling the turning off of button lights when i play the next song  */
          $(".buttons-container").removeClass("colored");
        }
        //here i can switch to next song
        if (this.state.song_index === 5) {
          this.setState({
            song_index: 0,
          });
          return;
        }
        if (this.state.song_index !== -1) {
          this.setState({
            song_index: this.state.song_index + 1,
          });
          return;
        }
      }
    }
    if (
      !document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("width-50")
    ) {
      //side menu is not visible
      if (this.state.options.length === 3) {
        //I must be on the music section
        if (this.state.showPage === 0) {
          //I am on all songs page
          if (this.state.current_music_selection === 5)
            //If I am playing the music at 5th index then I will need to reduce the index to 0 on next right button click.
            this.setState({
              current_music_selection: 0,
            });
          else
            this.setState({
              current_music_selection: this.state.current_music_selection + 1,
            });
        }
      }
    }
  };
  handleLeftPress = () => {
    if (this.state.currently_on_play_music_screen) {
      //if i am on the play music screen
      if (
        !document
          .getElementsByClassName("screen-menu")[0]
          .classList.contains("width-50")
      ) {
        //if the menu is not present on the screen
        if ($("#audio")[0] !== undefined) {
          /* handling the turning off of button lights when i play the next song  */
          $(".buttons-container").removeClass("colored");
        }
        //here i can switch to next song
        if (this.state.song_index === 0) {
          this.setState({
            song_index: 5,
          });
          return;
        }
        if (this.state.song_index !== -1) {
          this.setState({
            song_index: this.state.song_index - 1,
          });
          return;
        }
      }
    }

    if (
      this.state.options.length === 3 &&
      document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("width-50")
    )
      //if the menu is open and it is on the songs page only then if the left button clicked, menu will be changed to general options
      this.setState({
        options: this.state.general_menu,
        song_index: -1,
        selected: 0,
      });
    if (
      !document
        .getElementsByClassName("screen-menu")[0]
        .classList.contains("width-50")
    ) {
      //side menu is not visible
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

  playPauseButtonClicked = () => {
    if ($("#audio")[0] !== undefined) {
      if ($("#audio")[0].paused) {
        //if the music is paused i will play it, also turn on the button lights
        $("#audio")[0].play();
        $(".buttons-container").addClass("colored");
        return;
      }
      $("#audio")[0].pause();
      $(".buttons-container").removeClass("colored");
    }
  };
  currentlyOnPlayMusicScreen = () => {
    if (this.state.currently_on_play_music_screen) {
      $(".buttons-container").removeClass("colored");
      this.setState({
        currently_on_play_music_screen: false,
      });
    } else
      this.setState({
        currently_on_play_music_screen: true,
      });
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
          playPauseButtonClicked={this.playPauseButtonClicked}
        />
        <Button
          onMenuPress={this.handleMenuPress}
          onSelectPress={this.handleSelectPress}
          onRightPress={this.handleRightPress}
          onLeftPress={this.handleLeftPress}
          playPauseButtonClicked={this.playPauseButtonClicked}
        />
      </div>
    );
  }
}

export default App;
