import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import Loading from "./components/Loading/loading";
import * as serviceWorker from "./serviceWorker";
import Player from "./classes/player.js";
import Monster from "./classes/monster.js";
//import Battle from "./classes/battle.js";
import Item from "./classes/item.js";
import * as firebase from "firebase";
import configFirebase from "./config.js";

ReactDOM.render(<Loading />, document.getElementById("root"));

const db = firebase.initializeApp(configFirebase).firestore();

const playerCollection = db.collection("player");

const baseMonsterStats = {
  attackPoints: 30,
  healthPoints: 70,
  defensePoints: 10
};

const initPage = querySnapshot => {
  const players = querySnapshot.docs.map(playerDoc => {
    const playerData = playerDoc.data();
    const items = Object.keys(playerData.items).map(
      key =>
        new Item(
          playerData.items[key].name,
          playerData.items[key].healthPoints,
          playerData.items[key].attackPoints,
          playerData.items[key].defensePoints
        )
    );
    return new Player(playerData.name, "photo", playerData.stats, items);
  });
  console.log(players);
  const david = new Monster("David", "image", baseMonsterStats, {});
  const actors = [...players, david];
  ReactDOM.render(<App actors={actors} />, document.getElementById("root"));
};

playerCollection.get().then(initPage);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
