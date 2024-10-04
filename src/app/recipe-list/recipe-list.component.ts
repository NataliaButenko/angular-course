import { Component, OnInit } from '@angular/core';
import { RecipeRepositiry } from '../recipe.repositiry';
import { IRecipe } from '../shared/recipe.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SortByDate } from '../shared/recipe.enum';

@Component({
  selector: 'recipe-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit {
  public recipes: IRecipe[] = [];
  public sortByDate: SortByDate = SortByDate.None;
  public SortByDate = SortByDate;

  constructor(private recipesRepository: RecipeRepositiry) {}

  ngOnInit(): void {
    this.recipes = this.recipesRepository.getRecipes();
  }

  public removeRecipe(id: string): void {
    this.recipesRepository.removeRecipe(id);
    this.recipes = this.recipesRepository.getRecipes();
  }

  public handleSort(value: SortByDate): void {
    switch (value) {
      case SortByDate.Ascending: {
        this.recipes = this.sortByDateFn(this.recipes, true);
        break;
      }
      case SortByDate.Descending: {
        this.recipes = this.sortByDateFn(this.recipes, false);
        break;
      }
      default: {
        this.recipes = this.recipesRepository.getRecipes();
      }
    }
  }

  private sortByDateFn(items: IRecipe[], ascending: boolean = true): IRecipe[] {
    return items.sort((a: IRecipe, b: IRecipe) => {
      if (ascending) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });
  }
}
