"use strict";
const imgClose = document.querySelectorAll("img[data-close");
[...imgClose].map((item) => item.addEventListener("click", close));
function close(params) {
  return params.target.parentElement.remove();
}
