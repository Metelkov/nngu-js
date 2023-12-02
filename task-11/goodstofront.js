

import {goods} from './goods.js';

let key,value;
let somegood=document.querySelectorAll(".somegood");
somegood.forEach(function(elem,index){

let goodPic = goods[index].imgSrc;
let goodsName = goods[index].name;
let goodsKorpus = `Корпус: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${goods[index].corpus}`;
let goodsRemen = `<br> Ремешок: &nbsp&nbsp ${goods[index].remen}`;
let goodsRazmDispl = `<br> Размер дисплея: &nbsp&nbsp ${goods[index].displaySize}`;
let goodsTipDispl = `<br> Тип дисплея: &nbsp&nbsp ${goods[index].displayType}`;
let goodsBluetooth = `<br> Блютус: &nbsp&nbsp&nbsp ${goods[index].bluetooth}`;
let goodsOS = `<br> Операционные системы: &nbsp&nbsp&nbsp${goods[index].OS.os1}, &nbsp&nbsp${goods[index].OS.os2}`;

let goodsPerechislPic = elem.querySelector(".somegood-pic");
goodsPerechislPic.innerHTML=`<img src=${goodPic}>`;

let goodsPerechislName = elem.querySelector(".somegood-name");
goodsPerechislName.innerHTML=`${goodsName}`;



let goodsPerechisl = elem.querySelector(".somegood-properties");
goodsPerechisl.innerHTML=`${goodsKorpus}`;

goodsPerechisl.innerHTML+=`${goodsRemen}`;

goodsPerechisl.innerHTML+=`${goodsRazmDispl}`;

goodsPerechisl.innerHTML+=`${goodsTipDispl}`;

goodsPerechisl.innerHTML+=`${goodsBluetooth}`;

goodsPerechisl.innerHTML+=`${goodsOS}`;


})
