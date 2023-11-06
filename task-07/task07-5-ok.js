//5. Посчитайте количество букв и количество цифр в строке.


function quantity(str) {

let digit = 0;
let liter = 0;
//let qq = 0;
for(let i = 0 ; i < str.length ; i++) {
  (str[i].match(/[A-Za-zА-Яа-я]/)) ? liter++ : '' ;       //считаем только буквы
  (str[i].match(/\d/)) ? digit++ : '' ;                   //считаем только цифры
    
};

let answ = `в строке ${digit} цифр и ${liter} букв`
  return answ;
}

let str = prompt("введите предложение");
let a = quantity(str);
console.log(a);
