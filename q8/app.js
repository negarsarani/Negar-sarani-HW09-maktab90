"use strict";
const headMenu = document.getElementById("head-menu");
const menuList = document.getElementById("menu-list");

headMenu.addEventListener("click", (e) => {
  menuList.classList.toggle("display");
});
