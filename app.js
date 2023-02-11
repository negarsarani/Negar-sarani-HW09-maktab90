"use strict";
// 1. The table with id="age-table".
const log = console.log.bind(document);
const table = document.getElementById("age-table");



// 2. All label elements inside that table (there should be 3 of them).
const arrlabel = table.getElementsByTagName("label");
log(arrlabel);
// const td = document.getElementById("age-list")
// const childTd = [...td.children]
// log(childTd)
// childTd.map(child =>{
//     console.log(child);
// })



// 3. The first td in that table (with the word “Age”).
function findfirstTd(params) {
  const tds = [...table.getElementsByTagName("td")];
  return tds[0];
}
log(findfirstTd());



// 4. The form with name="search".
const ElemNameIsSearch = document.getElementsByName("search");
function formSearch(params) {
  return ElemNameIsSearch[0];
}
log(formSearch());

// 5. The first input in that form.
const form = [...document.getElementsByTagName("form")];
form.map((elem) => {
  const inputs = [...elem.getElementsByTagName("input")];
  const firstInputs = inputs[0];
  log(firstInputs);
});

// 6. The last input in that form.
form.map((elem) => {
  const inputs = [...elem.getElementsByTagName("input")];
  const LasttInputs = inputs[inputs.length - 1];
  log(LasttInputs);
});
