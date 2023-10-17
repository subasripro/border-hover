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
   days.innerHTML = d<10?"0"+d:d
  hours.innerText = h <10?"0"+h:h
  minuts.innerText = m<10?"0"+m:m
  secont.innerText =s<10?"0"+s:s
}
setInterval(updateDate , 1000)

/* console.log(new Date())
console.log(new Date().getHours()-24)
console.log(toDay)
console.log(tomorrow) */
//console.log(tomorrowDate)
/* console.log(diff)
console.log(d)
console.log(h)
console.log(m)
console.log(s) */









