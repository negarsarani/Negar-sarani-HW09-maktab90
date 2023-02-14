"use strict";
const getAllLinks = [...document.getElementsByTagName("a")];
console.log(getAllLinks);
function name() {
  getAllLinks.map((item) => {
    if (
      item.getAttribute("href").includes("://") &&
      !item.getAttribute("href").startsWith("http://internal.com")
    ) {
      item.style.color = "orange";
    }
  });
}
name();
