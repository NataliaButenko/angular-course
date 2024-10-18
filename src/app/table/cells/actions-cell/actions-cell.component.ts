import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'actions-cell',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatTooltipModule, MatIconModule],
  templateUrl: './actions-cell.component.html',
  styleUrl: './actions-cell.component.scss',
})
export class ActionsCellComponent {}
