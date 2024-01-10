
const div_parent = document.querySelector(".name")
console.log(div_parent)
// input f-name
const f_input = document.getElementById("f-name")
// input l-name
const l_input = document.getElementById("l-name")
console.log(l_input)
//email
const email = document.getElementById("p-email")
// passw
const passw = document.getElementById("p-pw")
// rePass
const rPass = document.querySelector(".r-pw")
console.log(email)
console.log(passw)


 let fN = `first name at least contain 5 letters`

 let lN = `Last name at least contain 3 letters`
// event to cgange and add node
// f_input.addEventListener("click",bg_color

let em = email.value
let pass = passw.value


const lemA = document.querySelector(".l-em")


let ms= document.getElementById("msg")

// events on elements
const forms = document.getElementById("myForm")

// function scan (e) {
    
//     let check_  = 
 
// }

forms.addEventListener("submit",(e)=>{
    e.preventDefault()
//     let email = change_email(),
//      Fn =change_fName(),
//     ln= change_lName(),
//     rp = repass_change(),
//      p = pass_change() ;

//    let scan = email && Fn && ln && rp && p 
//     if(scan){
       
//     }
})


f_input.addEventListener("click",change_fName)



function change_fName () {
   
    l_input.setAttribute("disabled","disabled")
    email.setAttribute("disabled","disabled")
    passw.setAttribute("disabled","disabled")
    rPass.setAttribute("disabled","disabled")
    f_input.classList.add("style")
    l_input.classList.remove("style")
    ms.style.display = "block"
    // l_input.contains("colors"){
        
    // }
   ms.innerHTML = fN 

    
    f_input.addEventListener("input",()=>{

        if(f_input.value.length > 5 || f_input.value.length >= 4 ){
            
            ms.classList.add("msg-s")
            l_input.disabled = false 
            f_input.style.border="3px solid green"
        }else{
            
            ms.classList = " "
            f_input.style.border="3px solid blue"
            l_input.disabled = true
        
        }

    
    
    })

   

}


 

function change_lName () {

   
    f_input.classList.remove("style")
    l_input.classList.add("style")
    lemA.style.display="block"
    lemA.innerHTML=lN
    ms.style.display="none"
   // lName

    l_input.addEventListener("input",(e)=>{
        if(l_input.value.length>=3){
            lemA.classList.add("msg-s")
            l_input.style.border="3px solid green"
        email.disabled = false 
        }else if(!(l_input.value)&& !(l_input.value.length>=3)){
            lemA.classList = "l-em"
            l_input.style.border="3px solid blue"
            email.disabled=true
        
        }
    })
}





// email 

email.addEventListener("click", change_email)

let al = `Email must contain @ and gmail.com`

const eC = document.querySelector(".eC")
console.log(eC)

function change_email(){

      if(!(f_input.value) && !(l_input.value)){
        alert("please filup name filed")
    
        return passw.disabled=true ,email.disabled=true , rPass.disabled=true;
       }else if(f_input.value&&l_input.value){
        eC.innerHTML = al
        eC.style.display="block"
          email.classList.add("style")
          lemA.style.display="none"
          l_input.classList.remove("style")
       }
      
       // checking valid input 

    email.addEventListener("input",(e)=>{
        if(email.value.includes("@gmail.com")){
            eC.classList.add("msg-s")
            email.style.border ="2px solid green"
            passw.disabled=false
        }else if(!(email.value) && !(email.value.includes("@gmail.com"))){
            eC.classList = " "
            email.style.border ="2px solid blue"
            passw.disabled=true
        }

    })

}



// let sym = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]+\.)+[a-zA-Z]{2,}))$/;



// password
let allSm = `must contain at least 1 a-z small letters `
let alin = `must contain at least 1 A-Z capital letters`
let numin = `must contain at least 1 number `

let syminfo = `must contain one special symbal @#$_+!`
let eightin = `
must contain at least 8 characters
`
const pal = document.querySelector(".info")
//child s el
const smallalfa = document.querySelector(".smAz")


const aL = document.querySelector(".Al")

const nuAl = document.querySelector(".num")

const symAll = document.querySelector(".sym")

const eiLet = document.querySelector(".eightc") 




passw.addEventListener("click", pass_change)

  
 function pass_change(params) {
     
    if(!(f_input.value) &&!(l_input.value) && !(email.value)){
     alert("please filup name filed first")
 
     return passw.disabled=true ,email.disabled=true , rPass.disabled=true;
    }else if (f_input.value && l_input.value && email.value){
 
        pal.style.display ="block"
         
        smallalfa.innerHTML = allSm
         aL.innerHTML=alin
         nuAl.innerHTML= numin
         symAll.innerHTML=syminfo
         eiLet.innerHTML = eightin 
         passw.classList.add("style")
         email.classList.remove("style")
         eC.style.display="none"
    }

        
    // check password
    let checka_z = pass 

    passw.addEventListener("input",(e)=>{
        let value = passw.value
        const a_z = passw.value.match(/[a-z]/g)
        const  A_Z = passw.value.match(/[A-Z]/g)
        const one_nine = passw.value.match(/[1-9]/g)

        const sym = passw.value.match(/[@#$_+!]/g)

        const allTg = passw.value.match(/[a-z|1-9|A-Z|@#$!_+]/g)

        const leg = passw.value.length >= 8
    if(passw.value){

        if(a_z){
        
            smallalfa.classList.add("msg-s")
        }else if(!(a_z)){
            smallalfa.classList = " "
            rPass.disabled=true
        }

        if(one_nine){
        
            nuAl.classList.add("msg-s")
        }else if(!(one_nine)){

            nuAl.classList =" "
            rPass.disabled= true 
        }
        
        if(A_Z){
        
            aL.classList.add("msg-s")
        }else if(!(A_Z)){
            aL.classList=" "
            rPass.disabled = true
        }
        
        if(sym){
        
        symAll.classList.add("msg-s")
        }else if(!(sym)){
            symAll.classList = " "
            rPass.disabled = true
        }
        if(leg && sym && one_nine && A_Z && a_z){
        
        eiLet.classList.add("msg-s")
        rPass.disabled= false 
        passw.style.border="3px solid green"
        
        }else if(leg < 8){
        rPass.disabled=true 
        }
        
        
    }else if(!(passw.value)){
        passw.style.border="3px solid blue"
        eiLet.classList=" "
        nuAl.classList=" "
        symAll.classList=" "
        aL.classList=" "
        smallalfa.classList=" "
        rPass.disabled=true
    }
    console.log(value)
    
    })

}

  





// repass
let rpassInfo = `conform password must be same as password`
const reInfo = document.querySelector(".repassInfo")
rPass.addEventListener("click", repass_change)

    
     function repass_change (params) {


          if(!(f_input.value) &&!(l_input.value) && !(email.value) && !(passw.value)){
           alert("please filup name filed first")
       
           return passw.disabled=true ,email.disabled=true , rPass.disabled=true;
           
          }else if (f_input.value && l_input.value && email.value && passw.value){
                reInfo.style.display="block"
                reInfo.innerHTML=rpassInfo
                pal.style.display="none"
                passw.classList.remove("style")
          }


          // CHECK CONFORM PASSW 
        rPass.addEventListener("input",(e)=>{
            if(rPass.value==passw.value){

                reInfo.classList.add("msg-s")
                rPass.style.border="3px solid green"
            }
        })
     }







console.log(passw.value)
let check = passw.value.match(/[]/g)?"yes":"no"
console.log(check)
console.log()







