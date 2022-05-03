import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[] = [];

  constructor() {
    this.ingredients.push(new Ingredients('Apple', 50)),
    this.ingredients.push(new Ingredients('Tomato', 20))
   }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredients){
    //this.ingredients.push(new Ingredients(shoppingItem.name, shoppingItem.amount))
    this.ingredients.push(ingredient);
  }

}
