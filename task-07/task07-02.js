2. Постройте регулярное выражение, проверяющее корректность названия переменной JS, которое ввел пользователь. Проверку ключевых слов не учитывать.


/^(([_]{0,2}|[$]?)|([A-Za-z]))\w$/

начинаем с
_ или $  - переменные в библиотеке lodash или JQuery, но знаков подчеркивания может быть два.
(доллар требует экранирования) и он только один или его может вообще не быть

В квадратных скобках все символы – это символы, 
обычно не экранируем.  ^ ставится в начале, в середине она особо не нужна, доллар в конце 
потеряли