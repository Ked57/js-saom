import React, { Component } from "react";
import "./ActorStats.css";
import { Card, CardContent, List, ListItem } from "@material-ui/core";

class ActorStats extends Component {
  createStatLine(name, value) {
    return (
      <ListItem key={name}>
        {name} : {value}
      </ListItem>
    );
  }

  render() {
    return (
      <div className="ActorStats">
        <Card>
          <CardContent>
            {this.props.actor.type}
            <p>Name : {this.props.actor.name}</p>
            <p>Stats : </p>
            <List>
              {Object.keys(this.props.actor.stats).map(key =>
                this.createStatLine(key, this.props.actor.stats[key])
              )}
            </List>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ActorStats;
