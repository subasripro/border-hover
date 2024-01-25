
const navBar = document.querySelector(".navbar");
const burgar = document.querySelector(".mobile");
const closeElem = document.querySelector(".close-con");

console.log(navBar);
console.log(burgar);
console.log(closeElem);


if(burgar){
    
    burgar.addEventListener("click",()=>{
   
        navBar.classList.add("active");
     
    })
}

if(closeElem){
    closeElem.addEventListener("click",()=>{
        navBar.classList.remove("active");
    })
}

