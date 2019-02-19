import getRandomInt from "../utils/utils.js";

export default class Battle {
  constructor(field, players, monster) {
    this.field = field;
    this.players = players;
    this.monster = monster;
    this.isGameOver = false;
  }

  fight() {
    do {
      console.log("On commence un tour");
      this.turn();
    } while (!this.isGameOver);
  }

  turn() {
    this.players.map(player => {
      if (this.isGameOver) {
        return;
      }
      const isEnnemyAlive = player.fight(this.monster);
      if (!isEnnemyAlive) {
        this.isGameOver = true;
      }
    });
    if (this.isGameOver) {
      return;
    }
    const player = this.players[getRandomInt(this.players.length)];
    const isEnnemyAlive = this.monster.fight(player);
    if (!isEnnemyAlive) {
      const index = this.players.indexOf(player);
      this.players.splice(index, 1);
      this.isGameOver = this.players.length <= 0;
    }
  }
}
