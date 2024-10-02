import { Injectable } from '@angular/core';
import { Todo } from './shared/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoRepository {
  private todos: Todo[] = [];
  constructor() {}

  public getTodoList(): Todo[] {
    return this.todos;
  }

  public addTodo(title: string): void {
    const todoId: string = (Math.random() + 1).toString(36).substring(7);
    const newTodo: Todo = {
      id: todoId,
      title,
      completed: false,
    };
    this.todos.push(newTodo);
  }

  public deleteTodo(id: string): void {
    this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
  }

  public completeTodo(id: string): void {
    this.todos = this.todos.map((todo: Todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }
}
