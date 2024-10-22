import { Component, inject, model, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogData } from '../cells/actions-cell/actions-cell.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'dialog-edit-product',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule,
    MatTooltipModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './dialog-edit-product.component.html',
  styleUrl: './dialog-edit-product.component.scss',
})
export class DialogEditProductComponent implements OnInit {
  public name: string = '';
  public price: number = 0;
  public discountPersent: number = 0;
  public sku: string = '';
  public tags: string[] = [];
  public country: string = '';

  public dialogRef = inject(MatDialogRef<DialogData | string>);
  public data = inject<DialogData>(MAT_DIALOG_DATA);

  announcer = inject(LiveAnnouncer);

  ngOnInit(): void {
    this.name = this.data.name;
    this.price = this.data.price;
    this.discountPersent = this.data.discountPersent;
    this.sku = this.data.sku;
    this.tags = this.data.tags;
    this.country = this.data.country;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    console.log('save');
  }

  removeTemplateTag(keyword: string) {
    this.tags = this.tags.filter((item) => {
      return item !== keyword;
    });
    this.announcer.announce(`removed ${keyword} from template form`);
  }

  addTemplateTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tags = [...this.tags, value];
      this.announcer.announce(`added ${value} to template form`);
    }
    event.chipInput!.clear();
  }
}
