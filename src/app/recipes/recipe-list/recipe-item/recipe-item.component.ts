import { Component, Input, OnInit } from '@angular/core';
//@ts-ignore
import { Irecipe } from '@interfaces/irecipe';
import { Recipe } from 'app/recipes/recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input () recipe:Recipe ;
  constructor() {
    this.recipe = {
      id:1,
      name:"",
      description:"",
      imagePath:"",
      ingredients:[]
    }
  }
  ngOnInit(): void {
  }

}
