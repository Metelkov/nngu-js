    // let flag=true;
    // function setTimer() {
    //     let endData = new Date(2024, 0, 1);
    //     let dataNow = new Date();
    //     let countData = (endData - dataNow)/86400000;
    //     let minut= (countData)*24*60;

    //   let hours=document.querySelector(".hours");
    //   let minutes=document.querySelector(".minutes");
    //   let seconds=document.querySelector(".seconds");
    //   let d1=document.querySelector(".d1");
    //   let d2=document.querySelector(".d2");
    //   hours.innerHTML=Math.round((countData)*24);
    //   minutes.innerHTML=Math.round((countData)*24*60);
    //   seconds.innerHTML=(Math.round((countData)*24*60*60));

    //   if (flag) {
    //     d1.style.visibility="visible";
    //     d2.style.visibility="visible";
    //   }
    //   else {
    //     d1.style.visibility="hidden";
    //     d2.style.visibility="hidden";
    //   }
    //   flag=!flag;
    // }

    // setInterval("setTimer()", 1000);
    
    let end=new Date(2024,0,1);
    let flag=true;
    function countdown(){
        let now=new Date();
        let str="";
        let days=Math.floor((end-now)/(1000*60*60*24));
        //let nowH=new Date();
        let hours=24-now.getHours();;
        let minutes=60-now.getMinutes();
        let seconds=60-now.getSeconds();
        //     str=`${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
        // document.querySelector(".timer").innerHTML=str;

        let d=document.querySelector(".days");
        d.innerHTML=days;

        let h=document.querySelector(".hours");
        h.innerHTML=hours;

        let m=document.querySelector(".minutes");
        m.innerHTML= minutes;

        let s=document.querySelector(".seconds");
        s.innerHTML=seconds;
        
        
        // let d1=document.querySelector(".d1");
        // let d2=document.querySelector(".d2");
        // if (flag) {
        //         d1.style.visibility="visible";
        //         d2.style.visibility="visible";
        //       }
        //       else {
        //         d1.style.visibility="hidden";
        //         d2.style.visibility="hidden";
        //       }
        //       flag=!flag;

}
setInterval("countdown()",1000);
       
