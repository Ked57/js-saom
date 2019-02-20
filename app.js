import Player from "./classes/player.js";
import Monster from "./classes/monster.js";
import Battle from "./classes/battle.js";
import Item from "./classes/item.js";
// import firebase from "./node_modules/firebase";

// const db = firebase.initializeApp({
//   apiKey: "AIzaSyC6BCgjCW2PRDiMIdV9HhTULmkgbMxVs6U",
//   authDomain: "saom-88cd9.firebaseapp.com",
//   databaseURL: "https://saom-88cd9.firebaseio.com",
//   projectId: "saom-88cd9",
//   storageBucket: "saom-88cd9.appspot.com",
//   messagingSenderId: "594008816413"
// });

// console.log(db.firestore());

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

const player = new Player("Joueur 1", "image", basePlayerStats, items);

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

const playerNameElement = document.getElementById("playerName");
const playerStatsElement = document.getElementById("playerStats");
const monsterNameElement = document.getElementById("monsterName");
const monsterStatsElement = document.getElementById("monsterStats");
const fightButton = document.getElementById("fightButton");

playerNameElement.innerHTML = player.name;
Object.keys(player.stats).map(key => {
  const listElement = document.createElement("li");
  listElement.appendChild(
    document.createTextNode(`${key}: ${player.stats[key]}`)
  );
  playerStatsElement.appendChild(listElement);
});
monsterNameElement.innerHTML = david.name;
Object.keys(david.stats).map(key => {
  const listElement = document.createElement("li");
  listElement.appendChild(
    document.createTextNode(`${key}: ${david.stats[key]}`)
  );
  monsterStatsElement.appendChild(listElement);
});

fightButton.addEventListener("click", fight);
