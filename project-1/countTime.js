let toDay = new Date().getDate()
const tomorrow = new Date(`october ${toDay + 1 } 2023 00:00:00`);

const days = document.getElementById("days")
  const hours = document.getElementById("hours")
 const minuts = document.getElementById("minuts")
const secont = document.getElementById("secont")
const word = document.getElementById("day-w").innerText = "DAYS"
function updateDate() {
     
  
     const tomorrowDate =new Date();
     const diff = tomorrow - tomorrowDate;
     const d =Math.floor( diff/1000/60/60/24);
     const h = Math.floor((diff/1000/60/60)%24)
     const m = Math.floor((diff/1000/60)%60)
     const s = Math.floor((diff/1000)%60)
    /*  console.log(d + ":" + h + ":" + m + ":" + s ) */
   days.innerHTML = formetTime(d)
  hours.innerText =formetTime( h )
  minuts.innerText =formetTime(m) 
  secont.innerText =formetTime(s)
}
setInterval(updateDate , 1000)
function formetTime (time){
  return time<10?"0"+time:time
}











