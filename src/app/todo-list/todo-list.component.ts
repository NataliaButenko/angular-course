import { Component, OnInit } from '@angular/core';
import { CompletedFilter, Todo } from '../shared/todo.interface';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoRepository } from '../todo.repositiry';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, AddTodoComponent, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  public todo: Todo[] = [];
  public filter = CompletedFilter.ALL;
  public CompletedFilter = CompletedFilter;
  constructor(private todoRepository: TodoRepository) {}

  ngOnInit() {
    this.todo = this.todoRepository.getTodoList();
  }

  public delete(id: string): void {
    this.todoRepository.deleteTodo(id);
    this.todo = this.todoRepository.getTodoList();
  }

  public activeTodo(id: string): void {
    this.todoRepository.completeTodo(id);
    this.todo = this.todoRepository.getTodoList();
  }

  public filterTodo(value: CompletedFilter): void {
    let allTodo: Todo[] = this.todoRepository.getTodoList();
    switch (value) {
      case CompletedFilter.COMPLETED: {
        this.todo = allTodo.filter((item: Todo) => item.completed);
        break;
      }
      case CompletedFilter.NOT_COMPLETED: {
        this.todo = allTodo.filter((item: Todo) => !item.completed);
        break;
      }
      default: {
        this.todo = allTodo;
      }
    }
  }
}
