// 9. Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
// вар 2
//остальные тоже работают, но "фильтр" не использовал.
//не все методы использую, но работает, и тут я все понимаю, тут легко
//массив дан, проверяется на содержание http и если есть - добавляется в новый масс
//а потом новый масс перетирает старый масс. сильно не оптимально, но зато понятно
//и это работает

let arr = ["egcv", "http://rr", "uiyg", "http://uy", "https://ijb"];

function httpSelection(someArr) {
let arrOut = []; 
for(let i = 0 ; i < arr.length ; i++){
   if(arr[i].toLowerCase().includes("http://")) {
     arrOut.push(arr[i]);
   };
 };
   arr = arrOut;
 return arr;
};

let a = httpSelection(arr);
console.log(a);
