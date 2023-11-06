// 3. Написать функцию, которая принимает массив любых целых чисел и возвращает истину, 
// если все элементы четные. Если имеется хотя бы один элемент не четный, то false.


let arr = [];
for(let i = 0 ; i < 3 ; i++){
arr.push(Math.floor(0 + Math.random() * (14)));
}
console.log("оригинальный масси = " + arr);

function trustArr(number) {
    return (number % 2 == 0);
};

console.log("  " + arr.every(trustArr));

