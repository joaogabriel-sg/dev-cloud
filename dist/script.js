"use strict";

var menu = document.querySelector('.menu');
var btnBurger = document.querySelector('.burger');

function openOrCloseMenu() {
  menu.classList.toggle('active');
  btnBurger.classList.toggle('active');
  document.documentElement.classList.toggle('no-scroll');
}

btnBurger.addEventListener('click', openOrCloseMenu);