import { Injectable } from '@angular/core';
import { IProduct, IProductTableItem } from './shared/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: IProductTableItem[] = [];
  constructor() {
    const mockProductsList: IProduct[] = [
      {
        id: 1,
        name: 'Product 1',
        price: 100,
        category: 'Category A',
        description: 'Description 1',
        inStock: true,
        rating: 4,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        category: 'Category B',
        description: 'Description 2',
        inStock: false,
        rating: 5,
      },
      {
        id: 3,
        name: 'Product 3',
        price: 300,
        category: 'Category A',
        description: 'Description 3',
        inStock: true,
        rating: 4.5,
      },
      {
        id: 4,
        name: 'Product 4',
        price: 200,
        category: 'Category B',
        description: 'Description 4',
        inStock: false,
        rating: 5,
      },
    ];
    this.products = mockProductsList.map((product: IProduct) => {
      return { ...product, selected: false };
    });
  }

  public getProducts(): IProductTableItem[] {
    return this.products;
  }

  public handleSelectItem(id: number): void {
    this.products = this.products.map((product: IProductTableItem) => {
      if (product.id === id) {
        return { ...product, selected: !product.selected };
      }
      return product;
    });
  }
}
