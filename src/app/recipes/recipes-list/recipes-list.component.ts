import { Component, EventEmitter, Output } from '@angular/core';

import { Recipes } from './../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent{
  @Output() recipeWasSelected = new EventEmitter<Recipes>()
  recipes: Recipes[] = [
    new Recipes("A Test Recipe", "It's just test", "https://i.pinimg.com/564x/d1/a7/67/d1a767238ec823ea952981e388edc145.jpg"),
    new Recipes("A Test Recipe2", "It's just test2", "https://i.pinimg.com/564x/d1/a7/67/d1a767238ec823ea952981e388edc145.jpg")
  ];

  constructor(){}

  onRecipeSelected(recipes: Recipes){
    this.recipeWasSelected.emit(recipes)
  }

}
