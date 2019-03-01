import React, { Component } from "react";
import "./App.css";
import ActorStats from "../ActorStats/ActorStats";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          {this.props.actors.map(obj => (
            <ActorStats key={obj.name} actor={obj} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
