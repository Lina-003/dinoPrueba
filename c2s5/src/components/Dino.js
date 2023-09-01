import dinosaurs from "../../dinosaurs.js"

export class Dino extends HTMLElement {
    selected = "seleccionado"

    static get observedAttributes() {
        return ["name", "type"];
    }
    constructor () {
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.mount();
        
    }

    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
          case "name":
            this.dinoName = newValue;
            break;
    
          case "type":
            this.dinoType = newValue;
            break;
    
          default:
            break;
        }
      }

    mount() {
        this.render();
        const btn = this.shadowRoot.querySelector("button");
        btn.addEventListener("click", () => {
            if (this.selected === "No seleccionado") {
                this.selected = "Seleccionado";
            } else {
                this.selected = "No seleccionado"
            }
            this.mount();
        })
    }

    render() {
        this.shadowRoot.innerHTML = `
        <section>
            <p>${this.selected}</p>
            <h3>name: ${this.dinoName}</h3>
            <p>type: ${this.dinoType}</p>
            <button>clic me</buttom>
        </section>`;
    }
}
customElements.define("app-dinosaur", Dino);