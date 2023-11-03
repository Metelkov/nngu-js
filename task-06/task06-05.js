

let arr = [];
let iteration = 7;
for(let i = 0 ; i < iteration ; i++){
arr.push(Math.floor(0 + Math.random() * (14)));
}
console.log("оригинальный масси = " + arr);


function sredArif(arr) {

let sum = arr.reduce(function(a, b){
  return (a + b);
});

return (sum  / iteration).toFixed(1);

};

let a = sredArif(arr);
console.log("среднее арифметическое = " + a);
