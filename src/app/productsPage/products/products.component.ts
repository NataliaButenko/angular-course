import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { Product } from '../../shared/product.interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'products',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  public products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.nGetData();
    this.productsService.products$.subscribe((data) => {
      this.products = data;
    });
  }
  public columns: string[] = ['product', 'sku', 'price', 'country', 'tags', 'actions'];
}
