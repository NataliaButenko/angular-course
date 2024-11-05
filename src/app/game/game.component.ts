import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { GameOverDialogComponent } from '../game-over-dialog/game-over-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GameStatus, Holder, ICell } from '../share/game.types';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  providers: [GameService],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  public gameBoard: ICell[] = [];
  public timer: number = 1000;
  public Holder = Holder;
  public gameStatus: GameStatus = {
    playerScore: 0,
    computerScore: 0,
    gameInProgress: false,
    isOver: false,
  };

  constructor(private dialog: MatDialog, private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.gameBoard$.subscribe((value: ICell[]) => {
      this.gameBoard = value;
    });
    this.gameService.gameStatus$.subscribe((status: GameStatus) => {
      this.gameStatus = status;
      this.openEndGameDialog(status.isOver);
    });
  }

  onStart() {
    this.gameService.startGame(this.timer);
  }

  onCellClick(id: string): void {
    this.gameService.cellClick(id);
  }

  openEndGameDialog(isOver: boolean): void {
    if (isOver) {
      this.dialog.open(GameOverDialogComponent, {
        data: {
          message: this.gameStatus.playerScore >= 10 ? 'You win!' : 'The computer won!',
          playerScore: this.gameStatus.playerScore,
          computerScore: this.gameStatus.computerScore,
        },
      });
    }
  }
}
