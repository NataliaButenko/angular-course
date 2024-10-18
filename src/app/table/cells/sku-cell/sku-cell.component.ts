import { Component, Input } from '@angular/core';

@Component({
  selector: 'sku-cell',
  standalone: true,
  imports: [],
  templateUrl: './sku-cell.component.html',
  styleUrl: './sku-cell.component.scss',
})
export class SkuCellComponent {
  @Input() sku!: string;
}
