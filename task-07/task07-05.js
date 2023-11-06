//5. Посчитайте количество букв и количество цифр в строке.
//очевидно пробел приравнен к букве



function quantity(str) {

let digit = 0;
let liter = 0;
//let qq = 0;
for(let i = 0 ; i < str.length ; i++) {
  // if(/\d/.test(str[i])){
  //   digit++;
  (/\d[^\s]/.test(str[i])) ? digit++ : liter++ ;         //как исключить пробел из поиска/подсчета символов, ^ и $ в конце не помогает - /^\d[^\s]$/
};

let answ = `в строке ${digit} цифр и ${liter} букв`
  return answ;
}

let str = prompt("введите предложение");
let a = quantity(str);
console.log(a);



//это д.б. внутри функции 
//мысли в слух и неудачные попытки

//  if(str[i] == /[0-9]/) {               //-- не работает
//   did++;
//}
//( str.slice(i, 1) == r) ? did++ : '';      //--выдает нули всегда
//str.substring(i) ? did++ : '';             //--считает все подряд
//(str[i].includes("/\d/")) ? did++ : '';    //-- не работает
//(str[i].search("/\d/")) == 1 ? did++ : '';   //--выдает нули всегда

 //qq += str[i].matchAll(/^[0-9]$/g);
//}
//qq = str.matchAll(/^[0-9]$/g);
//qq = str.match(/\d/);     //-собирает все подряд
//return qq;