const selectElem  = selector=>{
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Somthing went ,make sure that${selector} exits or is typed correctly.`);
} 
// console.log(selectElem('.navbar'))
const scrollheader = ()=>{
    const headerELEM = selectElem('#header');
    if(this.scrollY>= 15){
        headerELEM.classList.add('active');
    }else{
        headerELEM.classList.remove('active');
    }
}
window.addEventListener('scrollY',scrollheader);

const humber = selectElem('#menu-toggle');

const toggeMenu = () =>{
    const mobileMenu = selectElem('#menu');
    mobileMenu.classList.toggle('active');
    humber.classList.toggle('active');
};
humber.addEventListener('click',toggeMenu);

const bodyElem = document.body;
const moon = selectElem('#moon');
const currentT = localStorage.getItem('currenT');

if(currentT){
   
    bodyElem.classList.add('light-theme');
}
const themeToggle = selectElem('#theme-tangle');
const demo = selectElem('.de');
themeToggle.addEventListener('click',()=>{
    bodyElem.classList.toggle('light-theme');
    

    if(bodyElem.classList.contains('light-theme')){
        localStorage.setItem('currentT','themeActive');
        themeToggle.innerHTML = moon.innerHTML;
    }else{
        localStorage.removeItem('currentT');
        themeToggle.innerHTML = demo.innerHTML;
       
    };
});

const searchIcon = selectElem('#search-icon');
const formOpen = selectElem('.parent2');
const formCloseBtn = selectElem('#form-c-btn');
searchIcon.addEventListener('click',()=>{
    formOpen.classList.add('active');
    formCloseBtn.addEventListener('click',()=>{
    formOpen.classList.remove('active');

    });
});

window.addEventListener('keyup',event=>{
    if(event.key==='Escape')formOpen.classList.remove('active');
})

// import Swiper from 'swiper';
// SWIPER
/* const swiper = new Swiper('.swiper',{
    slidesPreView:1,
    spaceBetween:20,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    pagination:{
        el:'.swiper-pagination'
    },
    breakPoint:{
        700:{
            slidesPreView:2
        },
        1200:{
            slidesPreView:3
        }
    }
}); */

const swiperW = document.querySelectorAll(".swiper-slide");
const prevNext = selectElem(".swiper-button-prev");
const prevBack = selectElem(".swiper-button-next");

// slid 2

const prevTwo = selectElem(".swiper-button-next-700");
const prevBackTwo = selectElem(".swiper-button-prev-700");

const swiper_sH =document.querySelectorAll(".swiper-slide-2");
console.log(swiperW)

// slid 3
const swiper_lg = document.querySelectorAll(".swiper-slide-3");
const prevThree = selectElem(".swiper-button-next-1200");
const prevBackThree = selectElem(".swiper-button-prev-1200");

let index = 1;
function slide (ind) {
  

    for(let i =0;i<swiperW.length;i++){

        swiperW[i].style.display = "none";
        console.log(i)
        
    };

  
  
  if(ind > swiperW.length){
    index =   1;
    prevNext.style.display = "none"
   
  }
  if(ind < 1){
    index = swiperW.length;
    prevNext.style.display = "block"
    prevBack.style.display="block"
  }

  
  
  swiperW[index - 1].style.display = "block";
  console.log(swiperW);
  
//    slid 2


  //setInterval(slide,4000)

  
}
slide(index);
slid_two(index);
slide_three(index);
function slid_two (num) {
   
    for(let i =0;i<swiper_sH.length;i++){
        let slid_two = swiper_sH[i].style.display = "none";
    };
    
  if(num > swiper_sH.length){
    index =   1;
    // prevNext.style.display = "none"
   
  }
  if(num < 1){
    index = swiper_sH.length;
   
  }
  
  swiper_sH[index - 1].style.display = "block";
}

function slide_three () {
      //   slide 3
 for(let i=0;i<swiper_lg.length;i++){
    swiper_lg[i].style.display = "none";

 }
 if(index > swiper_lg.length){
    index =   1;
    
   
  }
  if(index < 1){
    index = swiper_lg.length;
   
  }
  swiper_lg[index -1].style.display="block";
}

prevNext.addEventListener("click",(()=>{
   
    plus(1);
}))
prevBack.addEventListener("click",(()=>{
    plus(-1);
}))

function plus (ind){
  slide(index += ind) ;
    console.log(index,ind)
  
}
function plus_2 (num){
 slid_two(index += num)
    console.log(index)
    
}
function plus_3 (){
  slide_three(index +=1)
    console.log(index)
    
}





// slid 2
prevBackTwo.addEventListener("click",(()=>{
    plus_2(1);
}))

prevTwo.addEventListener("click",(()=>{
    plus_2(-1);
}))

// slid 3
prevThree.addEventListener("click",(()=>{
    plus_3();
}))

prevBackThree.addEventListener("click",(()=>{
    plus_3();
}))


