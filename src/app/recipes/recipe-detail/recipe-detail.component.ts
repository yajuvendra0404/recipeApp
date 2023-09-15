import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iingredients } from '@interfaces/iingredients';
import { RecipeService } from '@services/recipeServices/recipe.service';
import { ShoppingListService } from '@services/shoppingList/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe = {
    id:null,
    imagePath:"",
    name:"",
    description:"",
    ingredients:[]
  };
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private activeRoute: ActivatedRoute) {
    // this.recipeService.recipeSelectEvent.subscribe((recipeEle:Recipe)=>{
    //   this.recipe = recipeEle;
    // })
  }
  addRecipeIngredientsToShoppingList(ingredients: Iingredients[]) {
    this.shoppingListService.addRecipeIngredientsToShoppingList(ingredients);
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe( data => {
      this.recipe = this.recipeService.getRecipesById(+data['id'])
    })
  }

}
