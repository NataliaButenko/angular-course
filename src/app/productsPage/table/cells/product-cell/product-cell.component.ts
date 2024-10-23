import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-cell',
  standalone: true,
  imports: [],
  templateUrl: './product-cell.component.html',
  styleUrl: './product-cell.component.scss',
})
export class ProductCellComponent {
  @Input() product!: { image: string; name: string; productID: string };
}
