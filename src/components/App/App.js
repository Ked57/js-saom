import React, { Component } from "react";
import "./App.css";
import ActorStats from "../ActorStats/ActorStats";

class App extends Component {
  render() {
    return (
      <div className="App">
        {Object.entries(this.props.actors).map((key, obj) => (
          <ActorStats actor={obj} />
        ))}
      </div>
    );
  }
}

export default App;
