import React, { useState } from "react";
import { Card, CardContent, List, ListItem } from "@material-ui/core";
import "./ActorStatsAsFunction.css";

const ActorStatsAsFunction = actorProp => {
  const [actor, setActor] = useState(actorProp);
  return (
    <div className="ActorStatsAsFunction" key={actor.name}>
      <Card>
        <CardContent>
          {actor.type}
          <p>Name : {actor.name}</p>
          <p>Stats : </p>
          <List>
            {Object.keys(actor.stats).map(key => {
              return (
                <ListItem key={key}>
                  {key} : {actor.stats[key]}
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActorStatsAsFunction;
