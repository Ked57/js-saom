export default class ActorStatsComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.content = document.createElement("p");
    this.actorNameElement = document.createElement("span");
    this.actorStatsElement = document.createElement("ul");
    this.content.appendChild(this.actorNameElement);
    this.content.appendChild(document.createTextNode("Stats"));
    this.content.appendChild(this.actorStatsElement);
  }

  renderActorData(actor) {
    this.actorNameElement.innerHTML = actor.name;
    Object.keys(actor.stats).map(key => {
      const listElement = document.createElement("li");
      listElement.appendChild(
        document.createTextNode(`${key}: ${actor.stats[key]}`)
      );
      actorStatsElement.appendChild(listElement);
    });
  }
}
window.customElements.define("actor-stats-component", ActorStatsComponent);
