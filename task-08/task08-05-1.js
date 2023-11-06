// 5. По заданной пользователем дате рождения сообщить его возраст в годах, месяцах и днях.



function Geburtstag(arg) {
// строку в массив, распарсить точками
let arr = arg.split('.');
let errOut = '';

// каждый элем проверить на число если не число - выход
if(isNaN(arr[0]) || isNaN(arr[1]) || isNaN(arr[2])) {
    errOut = "некоторый элемент даты не является числом или неверный разделитель- перезапустите программу, б. внимательнее";
    return errOut;}

// проверить - 0 < дд < 31, проверить - 0 < мм < 12, проверить - гггг < 0
else if(arr[0] <= 0 || arr[0] > 31 || arr[1] <= 0 || arr[1] > 12 || arr[2] < 0) {
      errOut = "неверно введены числа в дате, внимательнее на формат дд.мм.гггг. и внимательнее на отрицательные числа, перезапустите п.";
    return errOut;    }

// проверить - элементов в массиве = 3
else if(arr.length != 3) {
      errOut = "неверно введены числа в дате, или разделитель, перезапустите п.";
    return errOut;    };


 let yearCurr = new Date().getFullYear();
 let userYear =yearCurr-arr[2];
 let userMonth = userYear * 12;

//вычисление сколько годов было високосных - у нас кажд 4 високосный
let visokosGodov = Math.round(userYear/4);
let liveDay = userYear * 365 + visokosGodov;


let answer = (`Вы прожили ${userYear} лет, или ${userMonth} месяцев, или  ${liveDay} дней`);
    return answer;

};


let inputGeburtstag = prompt("введите дату ралжения - дд.мм.гггг \( разделитель - точки \)");
let a = Geburtstag(inputGeburtstag);
console.log(a);