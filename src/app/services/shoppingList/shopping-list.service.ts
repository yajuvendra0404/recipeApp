import { EventEmitter, Injectable } from '@angular/core';
import { Iingredients } from '@interfaces/iingredients';
import { Ingredients } from 'app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  updatedIngredients = new EventEmitter<Iingredients[]>();

  private ingredients: Iingredients[] = [
    new Ingredients("cinnimon",2),
    new Ingredients("apple", 3),
    new Ingredients("clove", 4)
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addNewIngredient(newIngredient: Iingredients) {
    this.ingredients.push(newIngredient);
    this.updatedIngredients.emit(this.ingredients.slice())
  }
  addRecipeIngredientsToShoppingList(recipeIngredients:Iingredients[]){
    this.ingredients.push(...recipeIngredients);
    this.updatedIngredients.emit(this.ingredients.slice())
  }
  constructor() { }

}
