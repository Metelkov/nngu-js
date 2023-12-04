import {typograph} from './typograph.js';

let priceValues = Object.values(typograph);

let table=document.querySelector("table")
for(let i = 0 ; i< priceValues.length ; i++) {
    let cellPrice = table.rows[i+1].cells[1];
    cellPrice.innerHTML=priceValues[i];
}


let arr = document.querySelectorAll("input[type='number']");
//alert(arr);

for (let j=0 ; j< arr.length ; j++) {
    arr[j].onchange=function(){

        document.getElementById(`sum${j}`).innerHTML=priceValues[j]* +arr[j].value;
        itogo();
    }
}

function itogo() {
    let sums = Array.from(document.querySelectorAll("[id*='sum']"));
    let summ=sums.reduce((sum,elem) => sum + +elem.innerHTML, 0);
    document.querySelector("#itogo").innerHTML=summ;
}