import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent {
  @Input() recipe: Recipes;
  @Output() recipeSelected = new EventEmitter<void>();

  onSelected(){
    this.recipeSelected.emit();
  }
}
