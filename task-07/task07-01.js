1. Постройте регулярное выражение, которое проверяет, является ли строка URL адресом.

/^([Hh][Tt][Tt][Pp][Ss]?):\/\/)([Ww]{3}\.(\w+\.){2,}\[a-zA-Z]+)/

///  /^([Hh][Tt][Tt][Pp][Ss]?):\/\/)([Ww][Ww][Ww]\.(\w+\.){1,5}\[a-zA-Z]+)/

[Ss]? – может быть может не быть
\.(\w+\.){1,5} - после точки имя домена, до 5 можно и больше. 
Если идет http://www.my.tilda.ru
\.\[a-zA-Z]+ - после точки домен первого уровня (ru, com,info,..)
