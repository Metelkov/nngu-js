
console.log("Метод map возвращает массив того же размера, как и перебираемый, а если на какой-то итерации отсутствовал return, то вставит undefined - поэтому не map");

function kratnFive() {
  let arr = [];
    for(let i = 0 ; i < 7 ; i++){
      arr.push(Math.floor(0 + Math.random() * (14)));
    }
  console.log("оригинальный масси = " + arr);

let result = (arr.filter((element_In_Arr) => element_In_Arr %5 == 0  )).filter((element_In_Arr) => element_In_Arr > 0);
return result;

};

let a = kratnFive()
console.log("элементы в массиве ратные пяти = " + a);
console.log("Array.isArray(a) = " + Array.isArray(a));

console.log("это я закрутил, сам удивлен, буду считать верхом элегантности \)\)\)  \(осталось запомнить\)");

