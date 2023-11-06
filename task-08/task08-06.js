// 6. Заполнить массив датами все пятниц, на которые выпадает 13-е число в текущем году.
//ниже есть реализация через тернарный оператор - нужно вставить внутрь функции


function freeday13() {
  let getDat = new Date();
  let thisYear = getDat.getFullYear();
  let containerFreeday13 = [];

for(let i = 0 ; i < 12 ; i++){
  if(new Date(thisYear, [i], 13).getDay() == 5) {
  containerFreeday13.push((new Date(thisYear, [i], 13)).toDateString());
  };
}

return containerFreeday13;

};


let a = freeday13();
console.dir("в этом году даты которые выпадаюбт на пятница 13 = \n" + a);



//      через тернарный оператор, но по сути - тоже самое 

// for(let i = 0 ; i < 12 ; i++){
//   (new Date(thisYear, [i], 13).getDay() == 5) ? containerFreeday13.push((new Date(thisYear, [i], 13)).toDateString()) : ''
//   };



