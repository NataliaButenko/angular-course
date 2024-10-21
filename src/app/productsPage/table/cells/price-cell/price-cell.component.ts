import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'price-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-cell.component.html',
  styleUrl: './price-cell.component.scss',
})
export class PriceCellComponent {
  @Input() price!: number;
  @Input() discount!: number;
}
