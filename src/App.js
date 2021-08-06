import "./App.css";
import Button from "./Button";
import React from "react";
import Screen from "./Screen";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      options: ["Games", "Music", "Settings", "Coverflow"],
    };
  }
  render() {
    const { options } = this.state;
    //console.log(options);
    return (
      <div className="App">
        <Screen options={options} />
        <Button />
      </div>
    );
  }
}

export default App;
