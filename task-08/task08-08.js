//8. Выведите на экран на какие дни недели выпадают в этом году официальные государственные праздники.


function freeDays() {
//1. полет мысли нужно останавливать, иначе над простой задачей можно сидеть вечно
//
//2. можно было сделать:
// let fullDate = new Intl.DateTimeFormat(getLocale, {dateStyle: "full"}).format((new Date(curYear, 1, 23)));
//тем самым избавиться от лишних переменных, но в моем случае дата бросается в глаза и ее легко поменять
//нежели разбирать эту строку
//
//3. сделал через локализацию, на мой взгляд так универсальнее - переключение языка происходит автоматически
//можно было и брать только день недели
// let mart8 = (new Date(curYear, 2, 8).toString().split(' ', 1));
//мысль после
//let fullDate = new Intl.DateTimeFormat(getLocale, {dateStyle: "full"}).format(feb23);
//let feb23 = (new Date(curYear, 1, 23).toString().split(' ', 1)).join();
//а потом его как то русифицировать, но это бы увеличило размер кода
//
//4. пока делал через переменные:
//let feb23 = (new Date(curYear, 1, 23));
//let dayOfWeek_janChistmass = (new Intl.DateTimeFormat(getLocale, {dateStyle: "full"}).format(janChistmass)).split(',', 2 ).reverse().join(' ДЕНЬ НЕДЕЛИ - ');
//подумал, что нужно выводить все сразу (как выводить в задании не указано) и решил все запихать в массив, хотя наверно нагляднее было бы в объект
//
//останавливаем полет мысли
//т.к. в январе праздники подряд - добавляю в цикле, остальные просто добавляю
//и открыл новый вывод через консоль - console.dir - но нужно тыкнуть мышкой и раскрыть массив
//
//все еще малый уровень автоматизации и индус-стайл, наверно можно как то решить через несколько функций
//и потом передавать функцию в функцию (функции высшего порядка), но у меня пока нет опыта

alert("обязательно читать комментарии, вывод в консоль");
let curDat = new Date();
let curYear = curDat.getFullYear();
let getLocale = (window.navigator.language).substr(0,2)
let outVacans = [];

for(let i = 0 ; i < 8 ; i++){
    janChistmass = (new Date(curYear, 0, i+1));
    outVacans.push((new Intl.DateTimeFormat(getLocale, {dateStyle: "full"}).format(janChistmass)).split(',', 2 ).reverse().join(' ДЕНЬ НЕДЕЛИ - '));
}

let feb23 = (new Date(curYear, 1, 23));
let mart8 = (new Date(curYear, 2, 8));
let may1 = (new Date(curYear, 4, 1));
let may9 = (new Date(curYear, 4, 9));
let jun12 = (new Date(curYear, 5, 12));
let nov4 = (new Date(curYear, 10, 4));

 outVacans.push((new Intl.DateTimeFormat(getLocale, {dateStyle: "full"}).format(feb23)).split(',', 2 ).reverse().join(' ДЕНЬ НЕДЕЛИ - '));
 outVacans.push((new Intl.DateTimeFormat(getLocale, {dateStyle: "full"}).format(mart8)).split(',', 2 ).reverse().join(' ДЕНЬ НЕДЕЛИ - '));
 outVacans.push((new Intl.DateTimeFormat(getLocale, {dateStyle: "full"}).format(may1)).split(',', 2 ).reverse().join(' ДЕНЬ НЕДЕЛИ - '));
 outVacans.push((new Intl.DateTimeFormat(getLocale, {dateStyle: "full"}).format(may9)).split(',', 2 ).reverse().join(' ДЕНЬ НЕДЕЛИ - '));
 outVacans.push((new Intl.DateTimeFormat(getLocale, {dateStyle: "full"}).format(jun12)).split(',', 2 ).reverse().join(' ДЕНЬ НЕДЕЛИ - '));
 outVacans.push((new Intl.DateTimeFormat(getLocale, {dateStyle: "full"}).format(nov4)).split(',', 2 ).reverse().join(' ДЕНЬ НЕДЕЛИ - '));

//ВНИМАНИЕ НА КОНСТРУКЦИЮ КОНСОЛИ!!!! - НУЖНО БУДЕТ РАСКРЫТЬ МАССИВ
return console.dir(outVacans);
};

let a = freeDays();
console.log(a);