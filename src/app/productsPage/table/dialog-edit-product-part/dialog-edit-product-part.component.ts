import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { Product } from 'src/app/shared/product.interface';
import { CategotiesTreeComponent } from './categoties-tree/categoties-tree.component';

@Component({
  selector: 'dialog-edit-product-part',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogActions,
    MatButtonModule,
    CategotiesTreeComponent,
  ],
  templateUrl: './dialog-edit-product-part.component.html',
  styleUrl: './dialog-edit-product-part.component.scss',
})
export class DialogEditProductPartComponent {
  public dialogRef = inject(MatDialogRef<Product | string>);
  public data = inject<Product>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    console.log('save');
  }
}
