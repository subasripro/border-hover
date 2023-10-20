getMeal()
 
  async function getMeal(){
  const resp = await fetch("https:www.themealdb.com/api/json/v1/1/random.php")
 /*  const meal = await resp.json() */
  console.log(resp)
}
/* async function getMealId(id){

 const mealId = await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
 console.log(mealId)
}
getMealId()
async function getMealBySearch(term) {

 const mealSearch = await  fetch(`www.themealdb.com/api/json/v1/1/search.php?s=` + term)
} */
