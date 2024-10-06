import { Component, Input } from '@angular/core';
import { IProduct } from '../shared/product.interface';
import { ProductPriceComponent } from '../product-price/product-price.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [ProductPriceComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  @Input() selectedProduct!: IProduct;
}
