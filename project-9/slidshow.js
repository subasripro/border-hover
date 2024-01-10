

const initSlider =()=>{
    
    // bttons
    const slidButtons = document.querySelectorAll(".buttons");
    //  slid-items
    const gridContiner = document.querySelector(".grids");
    const maxScrollLeft = gridContiner.scrollWidth - gridContiner.clientWidth;
    const nextBu = document.querySelector(".next-slid")
  
    slidButtons.forEach((value)=>{
        value.addEventListener("click",()=>{
           
            const dirction = value.id === "prv-slid" ? -1 :1;
            const scrollAmount = gridContiner.clientWidth * dirction;

            gridContiner.scrollBy({left:scrollAmount,behavior:"smooth"})
        })


    })  

    const handelSlid = () =>{
        slidButtons[0].style.display = gridContiner.scrollLeft <= 0 ? "none" : "block";
        slidButtons[1].style.display = gridContiner.scrollLeft >= maxScrollLeft ? "none" : "block"
        console.log(maxScrollLeft)
    }

    gridContiner.addEventListener("scroll",()=>{
        handelSlid()

    })
  
       
}

window.addEventListener("load",initSlider)


