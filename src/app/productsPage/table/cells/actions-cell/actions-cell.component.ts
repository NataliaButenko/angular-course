import { Component, inject, Input, model, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddOrEditProductComponent } from '../../dialog-add_or_edit-product/dialog-add_or_edit-product.component';
import { Product } from 'src/app/shared/product.interface';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/productsPage/products.service';
import { DialogConfirmComponent } from 'src/app/dialog-confirm/dialog-confirm.component';

export interface DialogData {
  name: string;
  sku: string;
  price: number;
  discount: number;
  tags: string[];
  countryCode: string;
  isEditMode: boolean;
}

@Component({
  selector: 'actions-cell',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule,
    DialogConfirmComponent,
  ],
  templateUrl: './actions-cell.component.html',
  styleUrl: './actions-cell.component.scss',
})
export class ActionsCellComponent {
  @Input() product!: Product;

  constructor(private productsService: ProductsService) {}

  private dialog = inject(MatDialog);

  openEditDialog(): void {
    const dialogRef = this.dialog.open(DialogAddOrEditProductComponent, {
      data: {
        name: this.product.name,
        sku: this.product.sku,
        price: this.product.price,
        discount: this.product.discount,
        tags: this.product.tags,
        countryCode: this.product.countryCode,
        isEditMode: true,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        let data = {
          name: result.name,
          price: result.price,
          discount: result.discount,
          sku: result.sku,
          countryCode: result.countryCode,
          tags: result.tags,
        };
        this.productsService.updateProduct(this.product.productID, data).subscribe((response) => {
          console.log('response', response);
          this.productsService.getProducts();
        });
      }
    });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: {
        message: `Do you really want delete "${this.product.name}" product?`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'yes') {
        this.productsService.deleteProduct(this.product.productID).subscribe((response) => {
          console.log('response', response);
          this.productsService.getProducts();
        });
      }
    });
  }
}
