"use strict";
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
[...plus].forEach((item) => {
  item.addEventListener("click", plusClick);
});
[...minus].forEach((item) => {
  item.addEventListener("click", minusClick);
});

function plusClick(e) {
  let spanCount = e.currentTarget.nextSibling.nextSibling.childNodes[1];
  spanCount.innerText = +spanCount.innerText + 1;
  const priceMain =
    e.currentTarget.parentElement.previousSibling.previousSibling.childNodes[3]
      .childNodes[0].innerText;
  const priceTotal =
    e.currentTarget.parentElement.parentElement.nextSibling.nextSibling
      .childNodes[1].childNodes[0];

  priceTotal.innerHTML = spanCount.innerHTML * priceMain;
}

function minusClick(e) {
  const spanCount =
    e.currentTarget.previousSibling.previousSibling.childNodes[1];
  // console.log(spanCount);
  if (spanCount.innerText > 0) {
    spanCount.innerText = spanCount.innerText - 1;
  }

  const priceMain =
    e.currentTarget.parentElement.previousSibling.previousSibling.childNodes[3]
      .childNodes[0].innerText;
  const priceTotal =
    e.currentTarget.parentElement.parentElement.nextSibling.nextSibling
      .childNodes[1].childNodes[0];
  priceTotal.innerHTML = spanCount.innerHTML * priceMain;
}
