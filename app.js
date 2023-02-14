"use strict";
const ul = document.getElementById("ul");

function li() {
  while (true) {
    let userInput = prompt("Enter Sth or you can write Html code here👩‍💻");
    if (userInput.key !== "Escape" && userInput !== "" && userInput !== null) {
      const createLi = document.createElement("li");
      ul.appendChild(createLi);
      createLi.innerHTML = userInput;
    } else {
      break;
    }
  }
}

li();
