import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://www.cookipedia.co.uk/wiki/images/b/b6/Chicken_a_la_King_recipe.jpg'),
    new Recipe('Carbonara', 'Macarrão a Carbonara', 'https://assets.bonappetit.com/photos/5a6f48f94f860a026c60fd71/1:1/w_5111,h_5111,c_limit/pasta-carbonara.jpg')
  ];

  constructor() {}

  ngOnInit() {
    
  }
}
