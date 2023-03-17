import { defineCustomElement } from "vue";
import './style.css'
import App from './App.vue'
const vueService = defineCustomElement(App);
customElements.define("vue-service", vueService);
