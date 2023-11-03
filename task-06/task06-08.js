

<p>странная реализация, как понял, так и сделал. если ввести 9 - на выходе 10. если ввести 99 - на выходе 10, 10. если ввести 10, на выходе 2, 1. 
  мы же не введем в "сплошной строке" две десятки, будет 1010 </p>

function digit() {
let questDigit = prompt("введите число");
  if (isNaN(questDigit)) {
    let exit1 = "Вы ввели не число, перезапустите программу";
    return exit1;
  }
    else {
        let getManyDigits = questDigit.split('');

        let  increment = getManyDigits.map(function (getManyDigits, index, arr) {
             return +getManyDigits +1
        })

        return increment;
    }

};

let a = digit()
console.log(" = " + a);

