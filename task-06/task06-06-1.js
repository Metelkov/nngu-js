//6. Написать функцию, которая принимает массив чисел и переносит первый элемент массива в конец.
//var 1

function perenos() {
  let arr = [];
  let iteration = 7;
    for(let i = 0 ; i < iteration ; i++){
      arr.push(Math.floor(0 + Math.random() * (14)));
    }
  console.log("оригинальный масси = " + arr);


let fromIndex = 0; // индекс элемента, который надо перенести в конец
let item = arr.splice(fromIndex, 1)[0]; // получаем элемент, который надо перенести и удаляем его из массива - элемент, берем 1 шт, удаляем 0 
arr.splice(arr.length, 0, item); // добавляем элемент в конец - вычисляем последний элем, удяляем 0 элемтов после, вставляем item

return arr;
};

let a = perenos()
console.log(" перенесенный = " + a);
