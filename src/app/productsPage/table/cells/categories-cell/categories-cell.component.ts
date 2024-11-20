import { Component, Input } from '@angular/core';
import { SliceLongStringPipe } from 'src/app/pipes/slice-long-string.pipe';

@Component({
  selector: 'categories-cell',
  standalone: true,
  imports: [SliceLongStringPipe],
  templateUrl: './categories-cell.component.html',
  styleUrl: './categories-cell.component.scss',
})
export class CategoriesCellComponent {
  @Input() categories: string = '';
}
