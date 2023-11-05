// 10. Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// Найдите сумму элементов этой структуры.

/// не удалось просуммировать массив который создал из элементов
/// после индус-стайла - продовал 3 способами сумму - не получилось
//ниже есть другие варианты попыток решения

let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];

let a = Object.keys(data[0]);
let b = Object.keys(data[1]);
let c = Object.keys(data[2]);
let d = [...a , ...b, ...c];
let sumKeys = d.reduce(function(sum, elem) {return sum + Number(elem);}, 0);

let valA = Object.values(data[0]);
let valB = Object.values(data[1]);
let valC = Object.values(data[2]);
let valZnzch = [].concat(valA, valB, valC);
let sumZnzch = valZnzch.reduce(function(sum, elem) {return sum + Number(elem);}, 0);

console.log("массив из ключей = " + d);
console.log("сумма массива ключей = " + sumKeys);
console.log("массив из значений = " + valZnzch);
console.log("сумма массива значений = " + sumZnzch);
console.log("---------- тут кончился индус-стайл, ничем кроме Object.values и Object.keys не замечателен------------------");




let keyZ = [];
let temp;
  for(let i = 0 ; i < data.length ; i++) {
     temp = Object.keys(data[i]);
     keyZ.push(temp);
  }
let sumKeys2 = keyZ.reduce(function(sum, elem) {return sum + elem;}, 0);   //---> 01,2,3,41,2,31,2,3

// let sum = 0;
// let sumKeys2 = keyZ.forEach(function(num) {sum += num;});      //---> undefined

// let sum3 = 0;
// for (var i = 0; i < keyZ.length; i++) {
//     sum3 += keyZ[i];     //---> 01,2,3,41,2,31,2,3
// }


console.log("массив из ключей = "+ keyZ);
console.log("сумма из массива ключей = "+ sumKeys2);
console.log("----------------------------");

let znachZ = [];
let temp2;
  for(let i = 0 ; i < data.length ; i++) {
     temp2 = Object.values(data[i]);
     znachZ.push(temp2);
  }
  
//let sumZnach2 = znachZ.reduce(function(sum, elem) {return sum + elem;}, 0);   //---> 011,12,13,1521,22,2324,25,26

let sum2 = 0;
let sumZnach2 = znachZ.forEach(function(num) {sum2 += num;});      //---> undefined

console.log("массив из значений = "+ znachZ);
console.log("сумма из массива значений = "+ sumZnach2);


////////еще попытка, взято из лекции, но все равно суммы не получаются
console.log("-------- еще попытка, взято из лекции, но все равно суммы не получаются---------------");

let masKeyTry3 = [];
data.forEach(elem => {
    for(key in elem) {
        masKeyTry3.push(key);
    }
});
 console.log(masKeyTry3);


 let masZnachTry3 = [];
data.forEach(elem => {
    for(key in elem) {
        masZnachTry3.push(elem[key]);
    }
});
 console.log(masZnachTry3);

