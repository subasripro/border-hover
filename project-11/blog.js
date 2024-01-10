const selectElem  = selector=>{
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Somthing went ,make sure that${selector} exits or is typed correctly.`);
} 
// console.log(selectElem('.navbar'))
const scrollheader = ()=>{
    const headerELEM = selectElem('#header');
    if(this.scrollY >= 15){
        headerELEM.classList.add('active');
    }else{
        headerELEM.classList.remove('active');
    }
}
window.addEventListener('scroll',scrollheader);

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
   
    bodyElem.classList.add('light-theme')
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