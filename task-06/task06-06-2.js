//6. Написать функцию, которая принимает массив чисел и переносит первый элемент массива в конец.
//var 2


function perenos() {
let arr = [];
let iteration = 7;
for(let i = 0 ; i < iteration ; i++){
arr.push(Math.floor(0 + Math.random() * (14)));
}
console.log("оригинальный масси = " + arr);


let fromIndex = 0; // индекс перемещаемого элемента
arr.push(arr[fromIndex]); // добавляем элемент с нужным индексом в конец массива
arr = arr.filter((num, index) => index !== fromIndex); // удаляем элемент с индексом 0 из массива

return arr;
};

let a = perenos()
console.log(" перенесенный = " + a);
