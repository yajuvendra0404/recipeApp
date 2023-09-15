import { Component, OnInit } from '@angular/core';
//@ts-ignore
import { RecipeService } from '@services/recipeServices/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
