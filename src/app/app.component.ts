import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
