import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoRepository } from '../todo.repositiry';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  public todoTitle: string = '';

  constructor(private todoRepository: TodoRepository) {}

  public addTodo(): void {
    this.todoRepository.addTodo(this.todoTitle);
    this.todoTitle = '';
  }
}
