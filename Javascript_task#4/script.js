const recipes = [
    { name: "Pancakes", ingredients: ["flour", "milk", "eggs"], type: "Breakfast" },
    { name: "Omelette", ingredients: ["eggs", "cheese", "pepper"], type: "Breakfast" },
    { name: "Grilled Cheese", ingredients: ["bread", "cheese", "butter"], type: "Lunch" },
    { name: "Pasta", ingredients: ["pasta", "tomato", "cheese"], type: "Dinner" },
    { name: "Chicken Salad", ingredients: ["chicken", "lettuce", "tomato"], type: "Lunch" },
    { name: "Smoothie", ingredients: ["banana", "milk", "honey"], type: "Breakfast" },
    { name: "Tacos", ingredients: ["tortilla", "beef", "cheese"], type: "Dinner" },
    { name: "Sushi", ingredients: ["rice", "fish", "seaweed"], type: "Lunch" },
    { name: "Chocolate Cake", ingredients: ["flour", "cocoa", "sugar"], type: "Dessert" },
    { name: "Tomato Soup", ingredients: ["tomato", "garlic", "onion"], type: "Dinner" }
];

function searchRecipes() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filterType = document.getElementById("filterType").value;
    const recipesList = document.getElementById("recipesList");
    
    recipesList.innerHTML = ""; 

    const filteredRecipes = recipes.filter(recipe => 
        (filterType === "All" || recipe.type === filterType) &&
        recipe.ingredients.some(ingredient => ingredient.includes(searchInput))
    );

    if (filteredRecipes.length === 0) {
        recipesList.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    filteredRecipes.forEach(recipe => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe");
        recipeElement.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>Type: ${recipe.type}</p>
            <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
        `;
        recipesList.appendChild(recipeElement);
    });
}
