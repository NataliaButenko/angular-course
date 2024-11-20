import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'tags-cell',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './tags-cell.component.html',
  styleUrl: './tags-cell.component.scss',
})
export class TagsCellComponent {
  @Input() tags!: string[];
}
