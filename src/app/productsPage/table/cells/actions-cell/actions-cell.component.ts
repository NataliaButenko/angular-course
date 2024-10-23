import { Component, inject, Input, model, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditProductComponent } from '../../dialog-edit-product/dialog-edit-product.component';
import { Product } from 'src/app/shared/product.interface';
import { CommonModule } from '@angular/common';

export interface DialogData {
  name: string;
  sku: string;
  price: number;
  discountPersent: number;
  tags: string[];
  country: string;
}

@Component({
  selector: 'actions-cell',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatTooltipModule, MatIconModule, CommonModule],
  templateUrl: './actions-cell.component.html',
  styleUrl: './actions-cell.component.scss',
})
export class ActionsCellComponent {
  @Input() product!: Product;
  // private sku = signal('');
  // private name = signal('');
  // private price = signal(0);
  // private discountPersent = signal(0);
  // private tags = signal([]);
  // private country = signal('');
  private dialog = inject(MatDialog);

  // ngOnInit(): void {
  //   this.sku = this.product.sku
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEditProductComponent, {
      data: {
        name: this.product.name,
        sku: this.product.sku,
        price: this.product.price,
        discountPersent: this.product.discount,
        tags: this.product.tags,
        country: this.product.countryCode,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // if (result !== undefined) {
      //   this.sku.set(result);
      // }
    });
  }
}
