document.getElementById("search-button").addEventListener("click", function () {
  const inputValue = document.getElementById("search-bar").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((res) => res.json())
    .then((data) => displayFood(data.meals));
    
});

const displayFood = (foodItem) => {
  const area = document.getElementById("display-area");
  foodItem.forEach(list => {
    const content = document.createElement("div");
    content.className = "content";
    const view = `<img onclick= " foodDetails('${list.strMeal}')" src="${list.strMealThumb}">
    <h3>${list.strMeal}</h3>`;
    content.innerHTML = view;
    area.appendChild(content);
  });
}

const foodDetails = name => {
 fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(res => res.json())
      .then(data => displayMealsDetails(data.meals[0]))
       }

const  displayMealsDetails = detail => {
const ul = document.getElementById("details-div");
const ingredientList = `
      <div class="image"><img  src="${detail.strMealThumb} "> </div>
      <h2> ${detail.strMeal} </h2>
      <li>${detail.strIngredient1}</li>
      <li>${detail.strIngredient2}</li>
      <li>${detail.strIngredient3}</li>
      <li>${detail.strIngredient4}</li>
      <li>${detail.strIngredient5}</li>
      <li>${detail.strIngredient6}</li>
      <li>${detail.strIngredient7}</li>
      <li>${detail.strIngredient8}</li>`
       ul.innerHTML = ingredientList;

    
}

