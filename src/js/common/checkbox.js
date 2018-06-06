"use strict"
let arrow = document.getElementById("arrow-img");
let inputJs = document.getElementById("skill-js__input");
let list = document.getElementById("skills-list");
let checkboxArr = Array.from(document.getElementsByClassName("skils-item__input"));
var checkedArr = [];
let allCheck = checkboxArr.length;

list.addEventListener("change", () => {
  let deg
  checkedArr.length = 0;
  for (let i = 0; i < checkboxArr.length; ++i) {
    let el = checkboxArr[i];
    if(el.checked) {       
      checkedArr.push(el);
    };
  }
  deg = (checkedArr.length / allCheck) * 100;
  arrow.style.transform = `translateX(-50%) rotate(${ deg * 1.8 }deg)`;
  inputJs.value = Math.trunc(deg);
  return checkedArr;
});
