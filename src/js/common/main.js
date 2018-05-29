'use strict'
let arrow = document.getElementById("arrow-img");
let inputJs = document.getElementById("skill-js__input");
let orange = document.getElementById("orange");
let green = document.getElementById("green");
let blue = document.getElementById("blue");

arrow.style.transform = `translateX(-50%) rotate(${inputJs.value*1.8}deg)`;

cliclColor(orange, 20);
cliclColor(green, 50);
cliclColor(blue, 80);

inputJs.addEventListener("input", (e) => {
  let target = e.target.value;
  checkValue(target);
});

inputJs.addEventListener("keydown", (e) => {
  const keyName = e.keyCode;
  if(keyName === 38) {
    inputJs.value = ++inputJs.value;
    checkValue(inputJs.value);
  } else if(keyName === 40) {
    inputJs.value = --inputJs.value;
    checkValue(inputJs.value);
  }
});

// функция проверки значения введенного в input
function checkValue (e) {
  if(+e !== NaN && e >= 0 && e < 101) {
    arrow.style.transform = `translateX(-50%) rotate(${e*1.8}deg)`;
  } else if(+e !== NaN && e > 100){
    inputJs.value = 100;
    arrow.style.transform = `translateX(-50%) rotate(${inputJs.value*1.8}deg)`;    
  } else if(+e !== NaN && e < 0){
    inputJs.value = 0;
  }else{
    inputJs.value = "";
  };
}

// функция клика по цветным блокам
function cliclColor(elem, val) {
  elem.addEventListener("click", () => {
    inputJs.value = val;
    checkValue (val)
  })
}