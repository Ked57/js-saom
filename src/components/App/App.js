import React, { Component } from "react";
import "./App.css";
import ActorStats from "../ActorStats/ActorStats";
import Grid from "@material-ui/core/Grid";
import Player from "../../classes/player";
import Monster from "../../classes/monster";

class App extends Component {
  splitActors(actors) {
    console.log(actors);
    return [
      actors.filter(actor => actor instanceof Player),
      actors.filter(actor => actor instanceof Monster)
    ];
  }

  render() {
    const [players, monsters] = this.splitActors(this.props.actors);
    return (
      <div className="App">
        <Grid container direction="row" justify="center" alignItems="center">
          {players.map(obj => (
            <ActorStats key={obj.name} actor={obj} />
          ))}
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          {monsters.map(obj => (
            <ActorStats key={obj.name} actor={obj} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
