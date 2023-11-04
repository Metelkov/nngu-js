//1. Напишите функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.
//вариант 1

function retDayWeek(arg) {
  let dayOfWeek = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
  let getDayOfMethodJS = Number(arg.getDay());
  let returnDayOfWeek = '';
  
    if (getDayOfMethodJS == 0) {
        returnDayOfWeek = dayOfWeek[6];
    }
      else {
        for(let i = 0 ; i < getDayOfMethodJS ; i++) {
            returnDayOfWeek = dayOfWeek[i];
        }
      }
    
  return returnDayOfWeek;
};

let date = new Date();
let a = retDayWeek(date);
console.log("Возврат дня недели из функции = " + a);
console.log("Метод получения даты возвращает это: " + date);
