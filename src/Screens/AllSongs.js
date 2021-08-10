import React, { Component } from "react";
import firebase from "firebase";

class AllSongs extends Component {
  constructor() {
    super();
    this.new_data_array = [];
    this.state = {
      all_songs_list: [],
      loading: true,
    };
  }
  componentDidMount() {
    firebase
      .storage()
      .ref()
      .child("music")
      .listAll()
      .then((data) => {
        data.items.forEach(async (ref) => {
          await ref
            .getDownloadURL()
            .then((url) => {
              this.new_data_array.push({ name: ref.name, url: url });
              //   if (this.new_data_array.length === 6) {
              //load the component when all the songs are added to the array.
              this.setState({
                all_songs_list: this.new_data_array,
                loading: false,
              });
              //   }
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((err) => {
        console.log("error");
      });
  }
  render() {
    return this.state.loading ? (
      <div className="loading-screen">
        <h1>Loading...</h1>
        <div className="loader"></div>
        <div>
          Please make sure that you are connected to the internet. Songs are
          fetched from the firebase storage.
        </div>
      </div>
    ) : (
      <div className="all-songs">
        <h1 className="all-songs-heading">All Songs</h1>
        <div className="all-songs-list">
          {this.state.all_songs_list.map((item, index) => {
            return (
              <div
                className={
                  this.props.currentMusicSelection === index
                    ? "selected-song"
                    : ""
                }
                key={index}
              >
                {item.name}
              </div>
            );
          })}
          <div className="instruction-all-songs">
            Use "<i className="fa fa-backward"></i>" and "
            <i className="fa fa-forward"></i>" buttons to navigate.
          </div>
        </div>
      </div>
    );
  }
}

export default AllSongs;