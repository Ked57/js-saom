import React, { Component } from "react";
import "./App.css";
import ActorStats from "../ActorStats/ActorStats";

class App extends Component {
  render() {
    const playerStats = { attack: 10, defense: 5 };
    const monsterStats = { attack: 8, defense: 4 };
    return (
      <div className="App">
        <ActorStats type="player" name="Clément" stats={playerStats} />
        <ActorStats type="monster" name="David" stats={monsterStats} />
      </div>
    );
  }
}

export default App;
