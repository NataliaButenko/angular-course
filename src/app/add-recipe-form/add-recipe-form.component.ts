import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeRepositiry } from '../recipe.repositiry';

@Component({
  selector: 'add-recipe-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-recipe-form.component.html',
  styleUrl: './add-recipe-form.component.scss',
})
export class AddRecipeFormComponent {
  public author: string = '';
  public date: string = '';
  public recipe: string = '';

  constructor(private recipesRepository: RecipeRepositiry) {}

  ngOnInit(): void {
    this.date = this.initDateFormat(); // формат 'YYYY-MM-DD'
  }

  public addRecipe(): void {
    // console.log('author', this.author);
    // console.log('data', this.date);
    // console.log('recipe', this.recipe);
    this.recipesRepository.addRecipe(this.author, this.date, this.recipe);
    this.resetForm();
  }

  private resetForm(): void {
    this.author = '';
    this.date = this.initDateFormat();
    this.recipe = '';
  }

  private initDateFormat(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
