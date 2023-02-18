"use strict"
const btn = document.getElementById("hider");
const text = document.getElementById("text");
btn.addEventListener("click", clickFun);
function clickFun(params) {
  text.remove();
  setTimeout(() => btn.remove(), 1000);
}