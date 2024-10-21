import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './productsPage/products/products.component';
import { NgModule } from '@angular/core';
import { ClientsComponent } from './clientsPage/clients/clients.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  {
    path: 'products/:id',
    loadComponent: async () =>
      (await import('./productsPage/product/product.component')).ProductComponent,
  },
  {
    path: 'clients',
    loadComponent: async () =>
      (await import('./clientsPage/clients/clients.component')).ClientsComponent,
  },
  {
    path: 'orders',
    loadComponent: async () =>
      (await import('./ordersPage/orders/orders.component')).OrdersComponent,
  },
  {
    path: 'settings',
    loadComponent: async () =>
      (await import('./settingsPage/settings/settings.component')).SettingsComponent,
  },
  { path: '**', redirectTo: '/products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
