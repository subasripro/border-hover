
/* function toDay() {


const time =new Date()
console.log(time)
const hour = new Date().getHours()
console.log(hour)
const min = new Date().getMinutes()
const sec = new Date().getSeconds()
const t = new Date().getDay()
const ms = new Date().getMilliseconds()

console.log( t +""+ hour + " " + min + " " + sec + " "+ ms)
console.log(sec)
console.log(sec)
}
/* setInterval(toDay,1000) */

const h = document.getElementById("hr")
const m = document.getElementById("mn")
const s = document.getElementById("sc")


setInterval(()=>{

    let day = new Date()
    let hour = day.getHours() *30 ;
    let min = day.getMinutes() * 6;
   let sec = day.getSeconds()*6;

    h.style.transform = `rotateZ(${hour + (min/12)}deg)`;
   m.style.transform = `rotateZ(${min}deg)`;
   s.style.transform = `rotateZ(${sec}deg)`;
})

// DIGITAL CLOCK

const dh = document.getElementById("hour")
const dm = document.getElementById("min")
const ds = document.getElementById("secont")






setInterval(() => {

    let day = new Date()
    let hour = day.getHours() 
    let sec = day.getSeconds()
     let min = day.getMinutes()

      dh.innerHTML =v(hour)
      dm.innerHTML =v(min) 
      ds.innerHTML =v(sec)

      
}, );

let v =(timeFormet)=>{
  return timeFormet<10?"0"+timeFormet:timeFormet
}