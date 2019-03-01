import React, { Component } from "react";
import "./ActorStats.css";

class ActorStats extends Component {
  createStatLine(name, value) {
    return (
      <li key={name}>
        {name} : {value}
      </li>
    );
  }
  render() {
    return (
      <div className="ActorStats">
        {this.props.type}
        <p>Name: {this.props.name}</p>
        <p>Stats: </p>
        <ul>
          {Object.keys(this.props.stats).map(key =>
            this.createStatLine(key, this.props.stats[key])
          )}
        </ul>
      </div>
    );
  }
}

export default ActorStats;
