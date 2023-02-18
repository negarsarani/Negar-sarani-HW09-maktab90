"use strict";
let container = document.getElementById("container");
let data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

function createTree(container, data) {
  const ul = document.createElement("ul");
  container.appendChild(ul);

  for (let key in data) {
    console.log(key);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = key;
    li.appendChild(span);
    console.log(Object.keys(data[key]));

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  }
}
createTree(container, data);
