
let arr = ["egcv", "http://rr", "uiyg", "http://uy", "https://ijb"];

function httpSelection(someArr) {
let arrOut = []; 
for(let i = 0 ; i < arr.length ; i++){
   if(arr[i].toLowerCase().includes("http://")) {
     arrOut.push(arr[i]);
   };
 };
   arr = arrOut;
 return arr;
};

console.log("ориг массив = " + arr);
let a = httpSelection(arr);
console.log(a);
