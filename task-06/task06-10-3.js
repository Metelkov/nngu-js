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

// вар 2

let keys=new Array();
data.forEach(elem=>{
  keys=[...keys,...Object.keys(elem)];//SPREAD оператор здесь в самый раз
});
console.log(keys);
let values=new Array();
data.forEach(elem=>{
  values=[...values,...Object.values(elem)];
});
console.log(values);



let sum=0;
data.forEach(elem=>{
for ([key, value] of Object.entries(elem)) {
 sum+=value;
}
});
console.log(sum);
