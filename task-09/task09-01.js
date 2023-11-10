
// Используя замыкания, создайте функцию, генерирующую ссылки для меню сайта с переходом на товары.
// http://myshop.ru/{категория товара}/{код товара}
// Разделы – ПК (PC), Ноутбуки (Notebooks), Мониторы (Monitors)
// Пользуясь возможностями фабрики функций, у вас должны появиться функции
// createPCLink(1001) – генерирует и возвращает ссылку на товар с кодом 1001 из категории ПК
// createNotebooksLink(4004) – генерирует ссылку на товар с кодом 4004 из категории ноутбуки 
// createMonitorLink(345) – генерирует ссылку на товар с кодом 345 из категории мониторы.



function getGenerateLink(category){
  return function(tovarCode) {
    return `https://myshop.ru/${category}/${tovarCode}`;
  };
};

let createPClinc = getGenerateLink("pc");
console.log(createPClinc("1001"))

let createNotebook = getGenerateLink("notebook");
console.log(createNotebook("4004"));


let createMonitor = getGenerateLink("monitor");
console.log(createMonitor("345"));

