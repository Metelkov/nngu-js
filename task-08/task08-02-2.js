//2. Напишите функцию, которая сообщит сколько дней осталось до нового года.
//ну или все в одну строку

function retNewYear(arg) {
    return (Math.round(((new Date((arg.getFullYear()+1),0,1)) - arg)/86400000))
    };
    
    
    let date = new Date();
    let a = retNewYear(date);
    console.log("Дней до нового года осталось = " + a);
    