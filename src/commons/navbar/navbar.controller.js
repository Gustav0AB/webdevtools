import view from "./template.html"
//import "./styles.scss"


class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = view;
    }
}

window.customElements.define("navbar-component", Navbar);