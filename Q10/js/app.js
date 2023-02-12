// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');
// const price = document.getElementById('price');
// const count = document.getElementById('count');
// const priceTotal = document.getElementById('priceTotal');
// plus.addEventListener("click", plusClick)
// minus.addEventListener("click" , minusClick)

// let saveCount = 0;
// function plusClick(){
//     saveCount++;
//     count.innerHTML = saveCount;
//     priceTotal.innerHTML = saveCount * price.innerHTML;
// }
// function minusClick(){
//     if (saveCount > 0) {
//         saveCount--;
//         count.innerHTML = saveCount;
//         priceTotal.innerHTML = saveCount * price.innerHTML;
//     }
// }
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const price = document.querySelectorAll(".price");
const count = document.querySelectorAll(".count");
const priceTotal = document.querySelectorAll(".priceTotal");
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
