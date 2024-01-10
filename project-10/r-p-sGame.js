// get the elements
const contanier = document.querySelector(".container"),
 userResult = document.querySelector(".user-res"),
 cpuResult = document.querySelector(".cpu-res"),
 result = document.querySelector(".result"),
 optionImgs = document.querySelectorAll(".all");
let rockicFcpu = optionImgs[0].innerHTML;
let sciicFcpu = optionImgs[2].innerHTML;
let papericFcpu = optionImgs[1].innerHTML;
let scoreD = 0;
let scoreU = 0;
let scoreC =0;

console.log(rockicFcpu , sciicFcpu,papericFcpu)

 optionImgs.forEach((icon,index,arr)=>{
    icon.addEventListener("click",(e)=>{
       icon.classList.add("motion");
         //    get the source of clicked  option icon
         let iconSrc  = e.target
         let txt = iconSrc.innerHTML;
         userResult.innerHTML = txt;

        //  genarate random number btw  0 TO 2
        let randomNum = Math.floor(Math.random()*3)
        //   let crate array of cpu icon op
       let cpuIcon = [rockicFcpu,papericFcpu,sciicFcpu];
    //    set the cpu icon to a random icon from the array
       cpuResult.innerHTML = cpuIcon[randomNum];

        //    assighn a letter value to the cpu icon (r for rock, p for paper,s for sci)
        let cpuValue = ['R','P','S'][randomNum];
        //  userValue
        let userValue =['R','P','S'][index];
        // console.log(cpuVlue , userValu)
        // create an obj with all possible outcomes
        let outComes = {
              RR :'Draw',
              RP:'Cpu',
              RS: 'User',
              PP:'Draw',
              PR :'User',
              PS : 'Cpu',
              SS :'Draw',
              SR :'Cpu',
              SP :'User'
        };
        let outComesValue = outComes[userValue + cpuValue];
        let txtValue = userValue === cpuValue ? 'Match Draw' :`${outComesValue}  Won`;
        result.textContent = txtValue
        console.log(randomNum, userValue , cpuValue)
        console.log(outComes)
        if(result.textContent === 'Cpu  Won'  ){
         scoreC++
         result.textContent += ` ${scoreC}` 
        }else if(result.textContent === 'User  Won'){
         scoreU++
         result.textContent += ` ${scoreU}`
        }else if(result.textContent === 'Match Draw'){
         scoreD++
         result.textContent += ` ${scoreD}`
        }
       
        
    })

 })


