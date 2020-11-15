import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is the recipe number one', 'https://media-cdn.tripadvisor.com/media/photo-s/0e/54/ea/06/pizza-hut.jpg'),
    new Recipe('Recipe 2', 'This is the second recipe', 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
