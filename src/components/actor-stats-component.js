import postal from "postal";

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

    postal.subscribe({
      channel: "players",
      topic: "init",
      callback: data => {
        console.log("callback");
        this.renderActorData(data);
      }
    });
  }

  renderActorData(actor) {
    console.log("yo");
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
