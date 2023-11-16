
//4. Изменить код метода wrapperA  таким образом, чтобы добавлялся анкор (текст) ссылки. Текст // передавать массивом.

// function Menu(...navList){
//     this.navList=navList;
//     this.wrapperA=function(){
//         return this.navList.map(elem=>`<a href='${elem}'>item</a>`);
//     }
// }
// let mainMenu=new Menu("home.html","services.html","price.html","about.html");
// for (elem of mainMenu.navList)
//     console.log(elem);
//     console.log(mainMenu.wrapperA());
// let footerMenu=new Menu("newPage.html","checkPage.html","seoPage.html");
// for (elem of footerMenu.navList)
//     console.log(elem);
//     console.log(footerMenu.wrapperA()); 


//нужно добавить i для перебора, организуем некий цикл


function Menu(...navList){
    this.navList=navList;
    this.wrapperA=function(...anchor){
        let i = 0;
        return this.navList.map(function(elem) {
            let str = `<a href='${elem}'>${anchor[i]}</a>`;
            i++;
            return str;
        });
    }
}
let mainMenu=new Menu("home.html","services.html","price.html","about.html");
for (elem of mainMenu.navList)
    console.log(elem);
    console.log(mainMenu.wrapperA("Домой", "Услуги", "Цены", "О нас"));
let footerMenu=new Menu("newPage.html","checkPage.html","seoPage.html");
for (elem of footerMenu.navList)
    console.log(elem);
    console.log(footerMenu.wrapperA("Создание страниц", "Проверка страниц", "Сеонизация страниц"));

