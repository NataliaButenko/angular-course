import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FirstDerectiveDirective } from './first-derective.directive';
import { CommonModule } from '@angular/common';
import { Less3Component } from './less-3/less-3.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FirstComponentComponent,
    FirstDerectiveDirective,
    CommonModule,
    Less3Component,
    TodoListComponent,
    AddTodoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
  public isHide: boolean = true;
  public arr: string[] = ['1', '2', '3'];
}
