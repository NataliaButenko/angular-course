import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'dialog-confirm',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatDialogTitle, MatButtonModule],
  templateUrl: './dialog-confirm.component.html',
  styleUrl: './dialog-confirm.component.scss',
})
export class DialogConfirmComponent {
  public dialogRef = inject(MatDialogRef<{ message: string } | string>);
  public data = inject<{ message: string }>(MAT_DIALOG_DATA);

  handleClick(type: 'yes' | 'no'): void {
    this.dialogRef.close(type);
  }
}
