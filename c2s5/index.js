import dinosaurs from "./dinosaurs.js";
import { Dino } from "./src/components/Dino.js"

class App extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render();
        
    }

    render() {
        const dinos = dinosaurs.map(
            (dino) => 
            `<app-dinosaur name="${dino.name}" type="${dino.type}"></app-dinosaur>`
        )
        const dinoJoined = dinos.join("");
        this.shadowRoot.innerHTML = `${dinoJoined}`

    }
}
customElements.define("app-container", App);