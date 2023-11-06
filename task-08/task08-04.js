// 4. Напишите функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:
// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }



function returnSomeTime(arg) {
if(isNaN(arg)) {
  let errStr = "секунды введены не как число или введено не число";
return errStr;
}
  else {
    let someTime = {};
    someTime['Дней'] = (Number(arg)/86400).toFixed(0);    //везде можно и без toFixed(0), тоже норм работает :)
    someTime['Часов'] = (Number(arg)/3600).toFixed(0);
    someTime['Минут'] = (Number(arg)/60).toFixed(0);
    someTime['Секунд'] = (Number(arg)).toFixed(0);
  return someTime;
  }


};

let getSecond = prompt("введите кол-во секунд");
console.log(`в ${getSecond} секундах`);
let a = returnSomeTime(getSecond);
console.log(a);
