
let btnRef = document.querySelectorAll(".btn-opt");
let popup = document.querySelector(".popup");
let reset = document.querySelector(".restart");
let newGameBtn = document.querySelector(".new-game");
let msg = document.querySelector(".msg");
console.log(btnRef)
console.log(popup)
console.log(reset);
console.log(newGameBtn);
console.log(msg);

//winning patrn array

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
]
console.log(winningPattern);


// player x plays first

let xTurn = true;
let count = 0;


// display x/0 on page when click

btnRef.forEach((value,index,arr)=>{
    value.addEventListener("click",()=>{
        if(xTurn){
            xTurn = false;
            // display x

            value.innerText = "X";
            value.disabled = true;
        }else{
            xTurn=true;
            value.innerHTML = "O";
            value.disabled = true;
        }

        // increament count on eack click
        count++;

        if(count === 9){
         drawFunc();
        }else{
            winnerCheck();
        }
    });
    console.log(value)
    
});


//win logic
function winnerCheck(){
    for(let i of winningPattern){
        console.log(i);
        let [elem1,elem2,elem3]=[
            btnRef[i[0]].innerHTML,
            btnRef[i[1]].innerHTML,
            btnRef[i[2]].innerHTML,
        ];
        
        // chech if element filed 

        // if 3 empty elements are same and would give win as would

        if(elem1!="" && (elem2!="") && (elem3!="")){
            if(elem1===elem2 && elem2 == elem3){
                // if all 3 buttons same values then pass the value to winfunction
                winFunction(elem1);
            }
        }
    }
}


// this function excutablr=e when a player wins
function winFunction(letter){
 disabledButton();

   if(letter=="X"){
    msg.innerHTML = "&#x1F389; <br> 'X' Wins";
   }else{
    msg.innerHTML = "&#x1F389; <br> 'O' Wins";
   }

};

// function for draw
function drawFunc(){
    disabledButton();
   msg.innerHTML = "&#x1F60E; <br> it's a Draw";
}

// disaple all btns
function disabledButton(){

    btnRef.forEach((value)=>{
        value.disabled= true;
        //enable popup

        popup.classList.remove("hide");
    });
}

//enaples btn for new game and hide popup

const enableBtn = ()=>{
    btnRef.forEach((value)=>{
        value.innerHTML = "";
        value.disabled = false;
    })
    // disaple popup elem
    popup.classList.add("hide");
}


newGameBtn.addEventListener("click",()=>{
    count=0;
    enableBtn();
});

reset.addEventListener("click",()=>{
    btnRef.forEach((value)=>{
      count =0;
      enableBtn();
    });
});

// enaple buttons and disaple popup when page loads

window.onload = enableBtn;


