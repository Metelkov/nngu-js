1. Постройте регулярное выражение, которое проверяет, является ли строка URL адресом.



/^([Hh][Tt][Tt][Pp]:\/\/)|^([Hh][Tt][Tt][Pp][Ss]:\/\/)|^([Ww][Ww][Ww]\.)/

^ - начало должно быть 
1й- символ H или h
2й- символ T илиt
3й- символ T или t 
4й- символ P или p
ИЛИ начинаться на 
1й- символ H или h
2й- символ T илиt
3й- символ T или t 
4й- символ P или p
5й- символ S или s
потом : (двоеточие)
экранируем \
еще раз экранируем \
ИЛИ начинаться на
W или w 
W или w
W или w
экранируем точку, чтоб был а как точка
