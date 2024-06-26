import './scss/vendor.scss'
import './scss/stylee.scss'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

var body = document.getElementById("body");
var modal = document.getElementById("menu-content");
var btn = document.getElementById("navigation__menu-button");
var btn2 = document.getElementById("button-close");

btn.onclick = function(){
    modal.style.display = "block";
    body.style.position = "fixed";
    body.style.overflow = "scroll";
}

btn2.onclick = function(){
    modal.style.display = "none";
    body.style.position = "static";
}  