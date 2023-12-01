

import {goods} from './goods.js';

let key,value;
goods.forEach(function(elem){

let goodPic = goods.imgSrc;
let goodsName = goods.toString().name;
let goodsKorpus = "Корпус:";
let goodsRemen = "Ремешок:";
let goodsRazmDispl = "Размер дисплея:";
let goodsTipDispl = "Тип дисплея:";
let goodsBluetooth = "Блютус:";
let goodsOS = "Операционные системы:";

let goodsPerechislPic = document.querySelector(".somegood-pic");
goodsPerechislPic.innerHTML=`${goodPic}`;

let goodsPerechislName = document.querySelector(".somegood-name");
goodsPerechislName.innerHTML=`${goodsName}`;

// let goodsPerechislSvoystv = document.querySelector(".somegood-properties");
// goodsPerechislSvoystv.innerHTML=`${goodsKorpus} ${goodsRemen} ${goodsRazmDispl} ${goodsTipDispl} ${goodsBluetooth} ${goodsOS}`;


let goodsPerechislSvoystv = document.querySelector(".somegood-properties");

  for ([key,value] of Object.entries(elem))
    goodsPerechislSvoystv.innerHTML=`${key} ${value}`;
        //alert(`${key}:${value}`);
})