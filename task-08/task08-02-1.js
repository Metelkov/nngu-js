//2. Напишите функцию, которая сообщит сколько дней осталось до нового года.



function retNewYear(arg) {

    let currDate = arg;
    let nextYear = currDate.getFullYear()+1;
    let newDate = new Date(nextYear,0,1);
    let rezult = (Math.round((newDate - currDate)/86400000));

return rezult;
};


let date = new Date();
let a = retNewYear(date);
console.log("Дней до нового года осталось = " + a);
