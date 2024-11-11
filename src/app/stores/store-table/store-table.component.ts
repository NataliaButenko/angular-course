import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'store-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './store-table.component.html',
  styleUrl: './store-table.component.scss',
})
export class StoreTableComponent {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
}
