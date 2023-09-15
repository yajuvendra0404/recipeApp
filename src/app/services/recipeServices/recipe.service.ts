import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { Ingredients } from 'app/shared/ingredient.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1,"First Recipie",
    "First Recipie Description, A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared food.",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    [
      {name:"Eggs",amount:2},
      {name:"Pepper",amount:2}
    ]),
    new Recipe(2,"Second Recipie",
    "Second Recipie Description, A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared food.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29Y54Agm1Ecu1EJktLBA3RCGJDK1wNzhWGQ&usqp=CAU",
    [
      {name:"Bread",amount:2},
      {name:"Onion",amount:2}
    ]),
    new Recipe(3,"Third Recipie",
    "Third Recipie Description, A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared food.",
    "https://cafebonappetit-prod.s3.amazonaws.com/uploads/sites/2/2021/09/de_food-safety_recipe_cookie-dough_400x400px_istock-1156033150.jpg",
    [
      {name:"Tomato",amount:2},
      {name:"Onion",amount:2}
    ]),
    new Recipe(4,"Fourth Recipie",
    "Fourth Recipie Description, A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared food.",
    "https://cdn.shopify.com/s/files/1/0294/2985/8444/articles/recipe_bbq_eblast_1080_x_400_px_2048_x_2048_px_1200x630.png?v=1650566802",
    [
      {name:"Bun",amount:2},
      {name:"Cheese",amount:2}
    ])
  ];
  recipeSelectEvent = new EventEmitter<Recipe>();
  getRecipesById(index: number){
    return this.recipes[index];
  }
  getRecipes(){
    return this.recipes.slice();
  }
  constructor() {}
}
