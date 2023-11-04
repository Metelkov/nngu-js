//3. Напишите функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
//{
//	next: 'пн',
//	curr: 'вс',
//	prev: 'сб',
//}


function returnDays(arg) {
 let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
 let retDaysObj = {};
   retDaysObj['next'] = days[date.getDay()+1];
   retDaysObj['curr'] = days[date.getDay()];
   retDaysObj['prew'] = days[date.getDay()-1];

return retDaysObj;
}

let date = new Date();
let a = returnDays(date);
console.log(a);
