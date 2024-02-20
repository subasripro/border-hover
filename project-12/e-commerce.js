
const navBar = document.querySelector(".navbar");
const burgar = document.querySelector(".mobile");
const closeElem = document.querySelector(".close-con");
const op_images = document.querySelectorAll(".small-img");
const main_ch_img = document.querySelector("#mainImg");

console.log(navBar);
console.log(burgar);
console.log(closeElem);
console.log(op_images);
console.log(main_ch_img);



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

if(main_ch_img){
    op_images.forEach((images,index,arr)=>{
        const images_src = images.src;

        images.addEventListener("click",()=>{
            let change_src =  main_ch_img.src = images_src;
            console.log(change_src)
            
        })
        
    })
}

