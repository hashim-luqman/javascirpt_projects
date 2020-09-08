const daysE1=document.getElementById('Days');
const  hoursE1=document.getElementById('hours');
const  minsE1=document.getElementById('mins');
const  secE1=document.getElementById('sec');


const eidulAdha = '13 oct 2020';

function countdown(){
    const eidulAdhaDate = new Date(eidulAdha);
    const currentDate = new Date();
    const totalsec = new Date(eidulAdhaDate - currentDate)/1000;
    const days = Math.floor(totalsec/ 3600 /24);
    const hours = Math.floor(totalsec/3600)%24;
    const mins = Math.floor(totalsec/60)%60;
    const sec = Math.floor((totalsec) % 60)

    daysE1.innerHTML=days;
    hoursE1.innerHTML=formatTime(hours);
    minsE1.innerHTML=formatTime(mins);
    secE1.innerHTML=formatTime(sec);

    function formatTime(time){
        return time < 10 ? (`0${time}`) : time;
    }


 
}
//intial call
countdown();
setInterval(countdown,1000); 
