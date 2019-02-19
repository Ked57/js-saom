import showResult from "../utils/utils.js";

export default class Battle {
  constructor(field, players, monster) {
    this.field = field;
    this.players = players;
    this.monster = monster;
  }

  fight() {
    if (
      this.monster.stats.healthPoints + this.monster.stats.defensePoints * 2 <=
      this.getCumulatedPlayersAttackPoints()
    ) {
      showResult(`Vous gagnez le combat contre ${this.monster.name} !`);
      return true;
    } else {
      showResult(`Vous perdez le combat contre ${this.monster.name} !`);
      return false;
    }
  }

  getCumulatedPlayersAttackPoints() {
    let cumulatedPlayersAttackPoints = 0;
    this.players.forEach(player => {
      cumulatedPlayersAttackPoints += player.stats.attackPoints;
    });
    return cumulatedPlayersAttackPoints;
  }
}
