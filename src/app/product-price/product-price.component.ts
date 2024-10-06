import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-price.component.html',
  styleUrl: './product-price.component.scss',
})
export class ProductPriceComponent {
  @Input() price!: number;
}
