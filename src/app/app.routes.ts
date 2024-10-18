import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id',
    loadComponent: async () =>
      (await import('./product/product.component')).ProductComponent, },
  { path: '**', redirectTo: '/products' }
];
