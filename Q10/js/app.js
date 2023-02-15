"use strict";
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const sumAllOrder = document.getElementById("sum-All-Order");
const servicePrice = document.getElementById("service-price");
const saleInput = document.getElementById("saleCode");
const btnTick = document.getElementById("btn-tick");
const mainPrice = document.getElementById("main-price");
const percent = document.getElementById("percent");

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

  const priceCard = (priceTotal.innerHTML = spanCount.innerHTML * priceMain);
  totalPrice();
}
let a = [];
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
  const priceCard = (priceTotal.innerHTML = spanCount.innerHTML * priceMain);
  totalPrice();
}

function totalPrice() {
  const card = document.getElementById("card");
  const eachPrice = card.querySelectorAll(".totalPrice");
  const arrayPrices = [...eachPrice].map((item) => +item.innerText);
  const reducePrices = arrayPrices.reduce((a, b) => {
    return a + b;
  });
  sumAllOrder.innerText = reducePrices;
  servicePayment(sumAllOrder.innerText);
}

function servicePayment(params) {
  servicePrice.innerText = (params * 50) / 1000;
  main(sumAllOrder.innerText, servicePrice.innerText);
}

const saleCode = [
  { code: "GOLDEN", Percent: "30" },
  { code: "SILVER", Percent: "20" },
  { code: "BRONZE", Percent: "10" },
];

btnTick.addEventListener("click", name);
function name() {
  const saveInput = saleInput.value;
  const sumAlltotal = +sumAllOrder.innerText + +servicePrice.innerText;
  const objfind = saleCode.find((e) => {
    return e.code === saveInput;
  });
  percent.innerText = objfind.Percent;
  const salePrice = sumAlltotal - (sumAlltotal * objfind.Percent) / 100;
  saleInput.value = "";
  mainPrice.innerText = salePrice;
}
function main(a, b) {
  return (mainPrice.innerText = Number(a) + Number(b));
}
