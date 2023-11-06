// 7. Написать скрипт, который при загрузке по разному в зависимости от времени суток приветствует 
// пользователя (например, "доброе утро", "добрый день" или "добрый вечер"). Время, в которое 
// следует говорить то или иное приветствие, выберите сами


function say() {
let getDat = new Date();
let currHour = getDat.getHours();
console.log(currHour);

if(currHour >=0 && currHour <=4) {
let phrase = "Доброй ночи"
return phrase;
}

else if (currHour > 4 && currHour < 9) {
 let phrase = "Доброе утро"
 return phrase;
}

else if (currHour > 9 && currHour < 18) {
 let phrase = "Добрый вечер"
 return phrase;
}

else if (currHour > 18 && currHour <= 23) {
 let phrase = "Добрыой ночи"
 return phrase;
}

};

let userName = prompt("Введите свое имя");
let a = say();
alert(userName + " - " + a);
