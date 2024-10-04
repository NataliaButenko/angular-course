import { Injectable } from '@angular/core';
import { IRecipe } from './shared/recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipeRepositiry {
  public recipes: IRecipe[] = [];

  constructor() {}

  public getRecipes(): IRecipe[] {
    return this.recipes;
  }

  public addRecipe(author: string, date: Date | string, recipe: string): void {
    let id: string = (Math.random() + 1).toString(36).substring(7);
    this.recipes.push({ author, date, recipe, id });
  }

  public removeRecipe(id: string): void {
    this.recipes = this.recipes.filter((recipe: IRecipe) => recipe.id !== id);
  }
}
