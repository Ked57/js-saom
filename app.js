import Player from "./classes/player.js";
import Monster from "./classes/monster.js";
import Battle from "./classes/battle.js";
import Item from "./classes/item.js";

const items = {
  sword: new Item("Epée", 0, 10, 1),
  chest: new Item("Plastron", 20, 0, 3),
  greaves: new Item("Jambières", 15, 0, 2),
  helmet: new Item("Casque", 10, 0, 2)
};

const players = [
  new Player(
    "Alex",
    "photo",
    {
      healthPoints: 40,
      attackPoints: 5,
      defensePoints: 5
    },
    items
  ),
  new Player(
    "Mael",
    "photo",
    {
      healthPoints: 40,
      attackPoints: 5,
      defensePoints: 5
    },
    items
  ),
  new Player(
    "Teddy",
    "photo",
    {
      healthPoints: 40,
      attackPoints: 5,
      defensePoints: 5
    },
    items
  ),
  new Player(
    "Clement",
    "photo",
    {
      healthPoints: 40,
      attackPoints: 5,
      defensePoints: 5
    },
    items
  )
];

const david = new Monster(
  "David le portos",
  "une image",
  {
    healthPoints: 500,
    attackPoints: 30,
    defensePoints: 5
  },
  {}
);

const battle = new Battle("field", players, david);

battle.fight();
