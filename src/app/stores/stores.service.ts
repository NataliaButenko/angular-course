import { Injectable } from '@angular/core';
import { Observable, of, delay, map } from 'rxjs';
import { FilterConfig } from '../shared/filters.interface';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  private mockData = {
    storeA: {
      products: [
        {
          id: 1,
          name: 'Laptop',
          category: 'Electronics',
          price: 1200,
          brand: 'BrandA',
          inStock: 'true',
        },
        {
          id: 2,
          name: 'Headphones',
          category: 'Electronics',
          price: 150,
          brand: 'BrandB',
          inStock: 'true',
        },
        {
          id: 3,
          name: 'Smartphone',
          category: 'Clothing',
          price: 800,
          brand: 'BrandC',
          inStock: 'false',
        },
      ],
      filters: [
        {
          label: 'Category',
          name: 'category',
          type: 'select',
          options: [
            { name: 'Electronics', value: 'electronics' },
            { name: 'Clothing', value: 'clothing' },
            { name: 'Books', value: 'books' },
          ],
        },
        {
          label: 'In Stock',
          name: 'inStock',
          type: 'checkbox',
        },
        {
          label: 'Search by Name',
          name: 'name',
          type: 'text',
        },
      ],
    },
    storeB: {
      products: [
        { id: 4, name: 'Sofa', category: 'Furniture', price: 700, material: 'Leather', sale: true },
        {
          id: 5,
          name: 'Dining Table',
          category: 'Furniture',
          price: 1200,
          material: 'Wood',
          sale: false,
        },
        { id: 6, name: 'Bed', category: 'Clothing', price: 1500, material: 'Metal', sale: false },
      ],
      filters: [
        {
          label: 'Category',
          name: 'category',
          type: 'select',
          options: [
            { name: 'Furniture', value: 'furniture' },
            { name: 'Electronics', value: 'electronics' },
            { name: 'Clothing', value: 'clothing' },
          ],
        },
        {
          label: 'Sale',
          name: 'sale',
          type: 'checkbox',
        },
        {
          label: 'Material',
          name: 'material',
          type: 'text',
        },
      ],
    },
    storeC: {
      products: [
        {
          id: 7,
          name: 'T-shirt',
          rating: '4',
          category: 'Clothing',
          price: 25,
          size: 'M',
          inStock: 'true',
        },
        {
          id: 8,
          name: 'Jeans',
          rating: '5',
          category: 'Clothing',
          price: 60,
          size: 'L',
          inStock: 'false',
        },
        {
          id: 9,
          name: 'Jacket',
          rating: '3',
          category: 'Clothing',
          price: 120,
          size: 'XL',
          inStock: 'true',
        },
      ],
      filters: [
        {
          label: 'Rating',
          name: 'rating',
          type: 'select',
          options: [
            { name: '1 Star', value: '1' },
            { name: '2 Stars', value: '2' },
            { name: '3 Stars', value: '3' },
            { name: '4 Stars', value: '4' },
            { name: '5 Stars', value: '5' },
          ],
        },
        {
          label: 'In stock',
          name: 'inStock',
          type: 'checkbox',
        },
        {
          label: 'Product ID',
          name: 'id',
          type: 'text',
        },
      ],
    },
  };

  getProducts(store: 'storeA' | 'storeB' | 'storeC'): Observable<any[]> {
    return of(this.mockData[store].products).pipe(delay(500));
  }

  getFilters(store: 'storeA' | 'storeB' | 'storeC'): Observable<FilterConfig[]> {
    return of(this.mockData[store].filters).pipe(delay(500));
  }

  getFilteredProducts(
    store: 'storeA' | 'storeB' | 'storeC',
    filters: { [key: string]: string }
  ): Observable<any[]> {
    return of(this.mockData[store].products).pipe(
      delay(500),
      map((products) =>
        products.filter((product: any) =>
          Object.keys(filters).every((key) => {
            if (filters[key] === undefined || filters[key] === null) return true;
            if (product[key] === undefined) return true;
            const productValue = product[key].toString().toLowerCase();
            const filterValue = filters[key].toString().toLowerCase();

            return productValue.includes(filterValue);
          })
        )
      )
    );
  }
}
