const quizzData = [
     {
       quizz_1 : "what programming lang Y lear?",
       a : "Java",
       b : "python",
       c : "Javascript" ,
       correct :'c'
    },
     {
       quizz_1 : "which is TamilNadu capital city?",
       a : "Chennai",
       b : "Mathurai",
       c : "Delhi",
       correct : "a"
    },
     {
       quizz_1 : "who is india PM?",
       a : "modi",
       b : "Ragul Kanthi",
       c : "Nirmella Davi",
       correct : "a"
    },
]
/* console.log(quizzData[0].quizz_1) */
console.log(quizzData)
let arrayIn= 0;
let score = 0;
const checkBox=  document.querySelectorAll(".answer")

function render () {
     
  valueUnSlected()
    const qD = quizzData[arrayIn]
    document.getElementById("quizzes").innerText = qD.quizz_1;
    document.getElementById("o-1").innerText = qD.a;
    document.getElementById("o-2").innerText = qD.b;
    document.getElementById("o-3").innerText = qD.c;
   
}

render()


function checkS() {
   // checks rediobox select
  let value = undefined;
  
   checkBox.forEach((checkBox)=>{
   
    if(checkBox.checked){
      value = checkBox.id;
 
    }


  })

  if(value===undefined){
    alert("select answer!")
  }
  return value;
  

}

function valueUnSlected () {

  // next quizes comes with unched box
  checkBox.forEach((checkBox)=>{
     
      checkBox.checked = false;
  })

}


function submit () {
    document.getElementById("submit").addEventListener("click",()=>{
     
     /*  let x = checkBox.value  */
      click()
      render()
        
    })

}
submit()

  function click () {
  
  
    const answer =checkS()
    console.log(answer)
  
    if(answer){
        // check the answers
      if(answer === quizzData[arrayIn].correct){
        score++
      }

      // loading the next quizz
      arrayIn++  
      if(arrayIn<quizzData.length){
          render()
       
      }else{
          document.getElementById("main").innerHTML =/*  `you answered ${score}/${quizzData.length}` */ 
          `<div class="js-el">
          <h2>
          you answered correctly  at ${score}/${quizzData.length} questions
          </h2>
          
          <button  onclick="location.reload()" class="re-l"> reload
          </button>

          </div>` 
          
      }
      console.log(score)
      
    }
  }