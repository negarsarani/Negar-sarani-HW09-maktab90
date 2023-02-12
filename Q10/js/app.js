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
// console.log(price);
const count = document.querySelectorAll(".count");
const priceTotal = document.querySelectorAll(".priceTotal");
[...plus].map(() => {
  addEventListener("click", plusClick);
});
// [...minus].map(
//     (e)=>{
//         e.addEventListener("click" , (e)=>{console.log(e.currentTarget)})
//     }
// );

function plusClick(e) {
  const parent = e.target.parentNode.parentNode.parentNode.parentNode;
  const arrParent = [...parent.childNodes]
  arrParent.get
//   parent.map(price =>{})
// const a = [...parent.childNodes][5]
// const b = [...a.childNodes][1];
// console.log();
}
