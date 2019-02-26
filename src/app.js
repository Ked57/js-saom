import Player from "./classes/player.js";
import Monster from "./classes/monster.js";
import Battle from "./classes/battle.js";
import Item from "./classes/item.js";
import firebase from "firebase";
import configFirebase from "../config.js";
import Actor from "./classes/actor.js";
import ActorStatsComponent from "./components/actor-stats-component.js";

const db = firebase.initializeApp(configFirebase).firestore();

const playerCollection = db.collection("player");

const items = {
  sword: new Item("Epée", 0, 10, 1),
  chest: new Item("Plastron", 20, 0, 3),
  greaves: new Item("Jambières", 15, 0, 2),
  helmet: new Item("Casque", 10, 0, 2)
};

const basePlayerStats = {
  attackPoints: 20,
  healthPoints: 0,
  defensePoints: 0
};

const baseMonsterStats = {
  attackPoints: 30,
  healthPoints: 70,
  defensePoints: 10
};

let player;

const initPage = querySnapshot => {
  if (querySnapshot.size > 1) {
    console.error("CA MARCHE PAS Y'A TROP DE GENS");
    return;
  }

  const playerDoc = querySnapshot.docs.pop();
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
  player = new Player(playerData.name, "photo", playerData.stats, items);

  const fightButton = document.getElementById("fightButton");

  fightButton.addEventListener("click", fight);
};

const actor1 = document.createElement("actor-stats-component");
const actor2 = document.createElement("actor-stats-component");
const stats = document.getElementById("stats");
stats.appendChild(actor1);
stats.appendChild(actor2);

playerCollection
  .where("name", "==", "player")
  .get()
  .then(initPage);

const david = new Monster("David", "image", baseMonsterStats, {});

const updatePos = position => {
  player.position(position);
};

const fight = () => {
  const battle = new Battle("field", [player], david);

  battle.fight();
};

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  const crd = pos.coords;
  player.position = crd;
  console.log("Votre position actuelle est :");
  console.log(`Latitude : ${player.position.latitude}`);
  console.log(`Longitude : ${player.position.longitude}`);
  console.log(`La précision est de ${player.position.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
