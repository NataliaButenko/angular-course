import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Product } from '../shared/product.interface';
import { ProductCellComponent } from './cells/product-cell/product-cell.component';
import { SkuCellComponent } from './cells/sku-cell/sku-cell.component';
import { PriceCellComponent } from './cells/price-cell/price-cell.component';
import { CountryCellComponent } from './cells/country-cell/country-cell.component';
import { TagsCellComponent } from './cells/tags-cell/tags-cell.component';
import { ActionsCellComponent } from './cells/actions-cell/actions-cell.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    ProductCellComponent,
    SkuCellComponent,
    PriceCellComponent,
    CountryCellComponent,
    TagsCellComponent,
    ActionsCellComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() dataSource: Product[] = [];
  @Input() displayedColumns: string[] = [];
}
