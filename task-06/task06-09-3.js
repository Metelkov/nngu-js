// 9. Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

// вар 3

let arr = ["egcv", "http://rr", "uiyg", "http://uy", "https://ijb"];


function httpSelection(someArr) {

let newArr = [];
someArr.map(element => element.includes("http://") ? newArr.push(element) : "");
someArr = newArr;
return someArr;  

};

let a = httpSelection(arr);
console.log(a);



