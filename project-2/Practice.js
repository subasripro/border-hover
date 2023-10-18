const variable = [
    {
        call : 1,
        one : 22
    },
    {
        call : 33,
        one : 88,

    },
    {
        call : 24,
        one : 1
    }
]
console.log(variable)
console.log(variable[0])
let position = 0


function callingA () {
    let arrayData = variable[position] 
  console.log(arrayData)
  console.log(arrayData.call )
  
    changeEl()

}
callingA()




function changeEl () {
   
    console.log( position++) 
    if(position < variable.length){
        console.log(variable.length)
       }else{
        console.log("yet")
       }
}

