import { createApp } from 'vue'
import App from './App.vue'
import router from './services/router'

import './assets/main.css'
class NetflixService extends HTMLElement {
  root
  constructor() {
    super()
    const app = createApp(App)
    app.use(router)
    this.root = document.createElement('div')
    app.mount(this.root)
  }
  connectedCallback() {
    this.appendChild(this.root)
  }
}

customElements.define('netflix-service', NetflixService)
