//1. Напишите функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.
//вариант 1



//вар 2
//локализация даты, считаю это более правильно


function retDayWeek(arg) {
    let getLocale = (window.navigator.language).substr(0,2)
    let fullDate = new Intl.DateTimeFormat(getLocale, {dateStyle: "full"}).format(arg);
    let arrOfDate = fullDate.split(',');
    
    return arrOfDate[0];
    };
    
    
    let date = new Date();
    let a = retDayWeek(date);
    console.log("Возврат дня недели из функции = " + a);
    console.log("Метод получения даты возвращает это: " + date);