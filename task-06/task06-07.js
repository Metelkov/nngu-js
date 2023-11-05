//7. Дан некоторый массив. Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, 
//стоящих на нечетных позициях. Считайте что первая позиция четная (номер индекса 0), массив должен 
//заполняться случайными числами и содержать четное число элементов.



function evenOdd() {
  let arr = [];
  let iteration = 8;
    for(let i = 0 ; i < iteration ; i++){
      arr.push(Math.floor(0 + Math.random() * (14)));
    }
  console.log("оригинальный масси = " + arr);

let countingEven = 0;
let countingOdd = 0;

let eventArr = arr.filter((perebiraemai_element, element_massiva) => element_massiva %2 ==0 );
let oddArr = arr.filter((perebiraemai_element, element_massiva) => element_massiva %2 !=0 );
console.log("eventArr = " + eventArr);
console.log("oddArr = " + oddArr);

var countEvent = eventArr.reduce(function(a, b){
    return a + b;
}, 0);

console.log("summ eventArr = " + countEvent);

var countOdd = oddArr.reduce(function(a, b){
    return a + b;
}, 0);

console.log("summ oddArr = " + countOdd);

let division = countEvent / countOdd;

return division;
};

let a = evenOdd()
console.log(" = " + a);
