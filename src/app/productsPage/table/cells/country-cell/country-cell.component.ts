import { Component, Input } from '@angular/core';

@Component({
  selector: 'country-cell',
  standalone: true,
  imports: [],
  templateUrl: './country-cell.component.html',
  styleUrl: './country-cell.component.scss',
})
export class CountryCellComponent {
  @Input() country!: string;
}
