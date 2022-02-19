const sec=1;
var date= new Date();
let cl= sec*(date.getHours()*60+ date.getMinutes())*60+date.getSeconds();

let secondHand = document.getElementById(".shand");
let minuteHand = document.getElementById(".mhand");
let hourHand = document.getElementById(".hhand");
function time(){
    cl++
  console.log(cl)
  let h=(cl/3600)%12;
  console.log(h)
  let m=(cl/60)%60;
  console.log(m)
 let s=(cl%60)
 console.log(s)
 h = Math.floor(h);
 m= Math.floor(m);
 s = Math.floor(s);
 shand.style.transform = `rotate(${s * 6}deg)`;
  mhand.style.transform = `rotate(${m * 6 - 90}deg)`;
  hhand.style.transform = `rotate(${h * 30 - 90}deg)`;

}setInterval(time,1000*sec)