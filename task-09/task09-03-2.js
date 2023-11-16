


//вариант 2 - правильное решение

// 3. Добавьте к предыдущей задаче возможность отправлять размер скидки в процентах

//Заказ покупателя Ivan составил 20000, скидка составила 0%
//Заказ покупателя Peter составил 11500, скидка составила 0%
//Заказ покупателя Mary составил 10000, скидка составила 0%
//Заказ покупателя Ivan составил 20000, скидка составила 10%
//Заказ покупателя Peter составил 11500, скидка составила 10%
//Заказ покупателя Mary составил 10000, скидка составила 10%

//скидку рассчитываю - (100/(`${this.price/this.quantity}`)) 
//так же проверяю является ли вывод массивом - из зи apply, который 
//принимает массив чтоб вывод не стал массивом. хоть тут и использую
//call, но его можно закомментировать и раскомментировать apply

//правильное решение

let orders=[
    {
        fio:"Ivan",
        tovar:"phone",
        price:10000,
        quantity:2
    },
    {
        fio:"Peter",
        tovar:"usb",
        price:2300,
        quantity:5
    },
    {
        fio:"Mary",
        tovar:"connector",
        price:100,
        quantity:100
    },
   ]


   function showOrder(action){
    let str=`Заказ покупателя ${this.fio} составил ${this.price*this.quantity*(100-action)/100}, скидка составила `+ `${action}%` + " \%";
    console.log(Array.isArray(str));
    console.log(str);
    }
    
    orders.forEach(elem=>showOrder.call(elem, 0));
    orders.forEach(elem=>showOrder.call(elem, 10));
