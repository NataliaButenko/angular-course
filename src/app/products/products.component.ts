import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { Product } from '../shared/product.interface';

@Component({
  selector: 'products',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  public mockProducts: Product[] = [
    {
      imgUrl:
        'https://www.penheaven.co.uk/media/catalog/product/c/r/cross-bailey-blue-ballpoint-pen1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=575&canvas=575:550',
      name: 'Product name 1',
      sku: 'asd-5465-f64',
      price: 20,
      discountPersent: -0.5,
      country: 'ua',
      tags: ['new', 'black'],
    },
    {
      imgUrl:
        'https://www.penheaven.co.uk/media/catalog/product/c/r/cross-bailey-blue-ballpoint-pen1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=575&canvas=575:550',
      name: 'Product name 2',
      sku: 'asd-5465-f65',
      price: 200,
      discountPersent: -1,
      country: 'de',
      tags: [],
    },
    {
      imgUrl:
        'https://www.penheaven.co.uk/media/catalog/product/c/r/cross-bailey-blue-ballpoint-pen1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=575&canvas=575:550',
      name: 'Product name 3',
      sku: 'asd-5465-f66',
      price: 100,
      discountPersent: -0.1,
      country: 'us',
      tags: ['new', 'parker'],
    },
  ];
  public columns: string[] = ['product', 'sku', 'price', 'country', 'tags', 'actions'];
}
