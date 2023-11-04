// 4. Напишите функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:
// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

// *** - need to work


function returnSomeTime(arg) {
if(isNaN(arg)) {
 let errStr = "секунды введены не как число или введено не число";
return errStr;
}
 else {
 let someTime = {};
//    someTime['d'] = Number(arg)/86400;
//    someTime['h'] = Number(arg)/3600;
//    someTime['m'] = Number(arg)/60;
 someTime['s'] = Number(arg);
return someTime;
}


};

let getSecond = prompt("введите кол-во секунд");
let a = returnSomeTime(date);
console.log(a);

console.log("getSecond = " + getSecond);

