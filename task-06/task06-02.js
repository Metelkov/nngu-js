//2. Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

function createArr() {
let arr = [];
for(let i = 0 ; i < 7 ; i++){
  arr.push(Math.floor(-5 + Math.random() * (15)));
}

console.log("оригинальный масси = " + arr);

let summ = 0;
  arr.forEach(function(entry) {
      if(entry > 0 && entry < 10) {
        summ += entry;
      }
  });
  return summ;
}

let a = createArr()
console.log("сумма элементов массива, которые больше нуля и меньше десяти = " + a);

