//class ingredients
class ingredients {
    constructor(id, name, image, calories) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.calories = calories;
    }
    show() {
        return `<h4>Ingredient Details:</h4>
                <img src=${this.image} alt="${this.name}">
                <h4>${this.name}</h4>
                <p>Calories: ${this.calories}</p></div>`;
    }
}
// class Dish Recipe
class DishRecipe {
    constructor(name, ingredients, time, cookingMethod, image) {
        this.name = name;
        this.ingredients = ingredients;
        this.time = time;
        this.cookingMethod = cookingMethod;
        this.image = image;


    }
    render() {
        let totalcal = this.getTotalCalories(this.ingredients);
        return (`<div class="col-md-4 dishRecipe">  
        <h2>Dish Recipe details:</h2>
        <img src="${this.image}" alt="${this.name}">            
        <h3>${this.name}</h3>            
        <h4>Cooking Method:</h4><span>${this.cookingMethod}</span>
        <h4>Total Cooking Time:</h4><span>${this.time}</span>
        <h4>Calories:</h4><span>${totalcal}</span> <br/>
        <button id="${this.name}" onclick="getIngredients(this.id)" class="ShowIngredients">Show Ingredients</button>
    </div>`);

    }
    getTotalCalories(ingredients1) {
        let totalCalories = 0;
        //sum the calories of the ingredients1 //use forEach
        ingredients1.forEach(ingredient => {
            totalCalories += parseInt(ingredient.calories);
        });
        return totalCalories;
    }

}
//class person, speed, weight, height


