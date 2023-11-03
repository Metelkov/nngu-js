

let arr = [];
for(let i = 0 ; i < 3 ; i++){
arr.push(Math.floor(0 + Math.random() * (14)));
}
console.log("оригинальный масси = " + arr);

function trustArr(number) {
    return (number % 2 == 0);
};

console.log("  " + arr.every(trustArr));

