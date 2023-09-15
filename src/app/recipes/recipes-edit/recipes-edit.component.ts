import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RecipeService } from '@services/recipeServices/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  recipeData: Recipe | undefined;
  id:number | undefined | null;
  constructor(
    private router:Router,
    private recipeService:RecipeService,
    private activeRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      this.id= data['id'] ? + data['id'] : undefined;
      this.recipeData = this.recipeService.getRecipesById(+data['id'])
    });
  }
}
