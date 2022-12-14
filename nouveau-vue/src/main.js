import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './style.css'
import 'flowbite'
import './script.js'


createApp(App).use(store).use(router).mount('#app')

 
const btn = document.querySelector("button.mobile-menu-button");
      const menu = document.querySelector(".mobile-menu");

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });


