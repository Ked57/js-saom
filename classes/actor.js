export default class Actor {
  constructor(name, image, stats, itemList) {
    this.name = name;
    this.image = image;
    this.statsBase = stats;
    this.itemList = itemList;
    this.stats = this.calculateStats(stats, itemList);
  }

  fight(actor) {
    actor.receiveAttack(this.stats.attackPoints);
    console.log(
      `${this.name} fights ${actor.name}, he inflitcs ${
        this.stats.attackPoints
      } damage who has ${actor.stats.defensePoints} defense points and now ${
        actor.stats.healthPoints
      } health points`
    );
    if (actor.stats.healthPoints <= 0) {
      return false;
    }
    return true;
  }

  receiveAttack(attackPoints) {
    this.stats.healthPoints -= attackPoints - this.stats.defensePoints;
  }

  calculateStats(stats, itemList) {
    Object.keys(itemList).map(key => {
      stats.healthPoints += itemList[key].healthPoints;
      stats.attackPoints += itemList[key].attackPoints;
      stats.defensePoints += itemList[key].defensePoints;
    });
    return stats;
  }
}
