import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/Ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef : ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef : ElementRef;
 
  @Output() shoppingItem = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit(): void {
  }
  

  onAddItem() {
    const newIngredient = new Ingredients(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingItem.emit(newIngredient);
  }

}
