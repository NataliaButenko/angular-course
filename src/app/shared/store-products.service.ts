import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreProduct } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public getProducts(): Observable<StoreProduct[]> {
    console.log('getProducts');
    return new Observable<StoreProduct[]>((observer) => {
      observer.next([
        {
          id: 1,
          name: 'Laptop',
          category: 'Electronics',
          price: 1200,
          brand: 'BrandA',
          inStock: true,
        },
        {
          id: 2,
          name: 'Headphones',
          category: 'Electronics',
          price: 150,
          brand: 'BrandB',
          inStock: true,
        },
        {
          id: 3,
          name: 'Smartphone',
          category: 'Clothing',
          price: 800,
          brand: 'BrandC',
          inStock: false,
        },
      ]);
    });
  }
}
