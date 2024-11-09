import { Component, inject, Inject, Injectable } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-over-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, CommonModule],
  templateUrl: './game-over-dialog.component.html',
  styleUrl: './game-over-dialog.component.scss',
})
export class GameOverDialogComponent {
  readonly dialogRef = inject(MatDialogRef<GameOverDialogComponent>);
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { playerScore: number; computerScore: number; message: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
