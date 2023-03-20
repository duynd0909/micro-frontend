import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

class BankService extends HTMLElement {
  root;

  constructor() {
    super();
    this.root = document.createElement("div");
    ReactDOM.createRoot(this.root).render(<App></App>);
  }

  connectedCallback() {
    this.appendChild(this.root);
  }
}

customElements.define("bank-service", BankService);
