import { Component, OnInit } from '@angular/core';
import { Iingredients } from '@interfaces/iingredients';
import { ShoppingListService } from '@services/shoppingList/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }
  addNewRecipe(value: Iingredients){
    this.shoppingListService.addNewIngredient(value);
  }
  ngOnInit(): void {
  }

}
