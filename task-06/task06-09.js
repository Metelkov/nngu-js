// 9. Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

// вар 1
// /// как в лекции, startsWith - нужно запомнить!! остальные варианты содержат больше кода и треб больш памяти



let arr = ["egcv", "http://", "http://ssss", "uiyg", "http://uy", "https://ijb"];

function httpSelection(someArr) {
  let arr = someArr.filter(index => index.startsWith("http://")) ;
return arr;

};

let a = httpSelection(arr);
console.log(a);
