import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'app/services/recipeServices/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[];

  constructor(private recipeService: RecipeService) {}

  // recipeSelected (recipeEle: Recipe):void {
  //   this.recipeService.recipeSelectEvent.emit(recipeEle);
  // }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
