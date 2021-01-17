import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Scrambled Eggs',
      'Fluffy, Delicious Pasture Raised Eggs',
      'https://www.seriouseats.com/recipes/images/2015/05/20150511-scrambled-eggs-vicky-wasik-17-1500x1125.jpg'
    ),
    new Recipe(
      'Scrambled Eggs',
      'Fluffy, Delicious Pasture Raised Eggs',
      'https://www.seriouseats.com/recipes/images/2015/05/20150511-scrambled-eggs-vicky-wasik-17-1500x1125.jpg'
    ),
    new Recipe(
      'Scrambled Eggs',
      'Fluffy, Delicious Pasture Raised Eggs',
      'https://www.seriouseats.com/recipes/images/2015/05/20150511-scrambled-eggs-vicky-wasik-17-1500x1125.jpg'
    ),
    new Recipe(
      'Scrambled Eggs',
      'Fluffy, Delicious Pasture Raised Eggs',
      'https://www.seriouseats.com/recipes/images/2015/05/20150511-scrambled-eggs-vicky-wasik-17-1500x1125.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
