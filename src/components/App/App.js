import React from "react";
import "./App.css";
import ActorStatsAsFunction from "../ActorStatsAsFunction/ActorStatsAsFunction";
import Grid from "@material-ui/core/Grid";
import Player from "../../classes/player";
import Monster from "../../classes/monster";

const splitActors = props => {
  const actors = props.actors;
  return [
    actors.filter(actor => actor instanceof Player),
    actors.filter(actor => actor instanceof Monster)
  ];
};

const App = actors => {
  const [players, monsters] = splitActors(actors);
  return (
    <div className="App">
      <Grid container direction="row" justify="center" alignItems="center">
        {players.map(obj => ActorStatsAsFunction(obj))}
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        {monsters.map(obj => ActorStatsAsFunction(obj))}
      </Grid>
    </div>
  );
};

export default App;
