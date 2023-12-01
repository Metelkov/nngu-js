
  js/1.js 
import {people} from '../data/object.js';
let key,value;
people.forEach(function(elem){
    for ([key,value] of Object.entries(elem))
        alert(`${key}:${value}`);
})
--------------------------------------
  js/2.js 
import {people} from '../data/object.js';
alert(people.toString());

---------------------------------------
data/object.js
'use strict'
export let people=[
    {
        firstName: "Ivan",
        surname:"Ivanov",
        birthdayYear:2001
    },
 {
        firstName:"Petr",
        surname:"Petrov",
        birthdayYear:1985
    }
]
alert("hello");
-------------------------------------------

index.html
<body>
   
   <script type="module" src="data/object.js"></script>
   <script type="module" src="js/1.js"></script>
   <script type="module" src="js/2.js"></script>

</body>

------------------------------------
  tmp.html
<script>
let a=prompt('Введите начальное значение x');
let b=prompt('Введите конечное значение x');
if ((isNaN(a) || isNaN(b)) || b<a)
alert('Input Error');
else {
let i=0;
for (let i=a; i<=b; i++)
{
console.log((i**2 + 1)-((i**3 + 2) / i));
}
}
</script> 