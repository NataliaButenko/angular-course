import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Subscription, takeWhile, tap } from 'rxjs';
import { GameStatus, Holder, ICell } from '../share/game.types';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameBoard: ICell[] = new Array(100).fill('').map((item: string, index: number) => {
    return { id: item + '' + index, holder: Holder.Sistem, isActive: false };
  });
  public gameSubject = new BehaviorSubject<ICell[]>(
    new Array(100).fill('').map((item: string, index: number) => {
      return { id: item + '' + index, holder: Holder.Sistem, isActive: false };
    })
  );
  public gameBoard$ = this.gameSubject.asObservable();

  private gameStatusSubject = new BehaviorSubject<GameStatus>({
    playerScore: 0,
    computerScore: 0,
    gameInProgress: false,
    isOver: false,
  });

  public gameStatus$ = this.gameStatusSubject.asObservable();

  constructor() {}

  public startGame(timer: number): void {
    this.gameStatusSubject.next({
      playerScore: 0,
      computerScore: 0,
      gameInProgress: true,
      isOver: false,
    });
    this.reset();

    function getRandom() {
      return ~~(Math.random() * 100);
    }

    if (this.checkGameOver()) return;
    interval(timer)
      .pipe(
        takeWhile(() => !this.checkGameOver()),
        tap(() => {
          let randomCell = getRandom();
          this.gameBoard = this.gameBoard.map((item) => {
            if (item.isActive && item.holder === Holder.Sistem) {
              const currentStatus = this.gameStatusSubject.value;
              this.gameStatusSubject.next({
                ...currentStatus,
                computerScore: currentStatus.computerScore + 1,
              });
              item.holder = Holder.Computer;
            }
            if (item.id === `${randomCell}`) {
              return { ...item, isActive: true };
            }
            return { ...item, isActive: false };
          });
          this.gameSubject.next(this.gameBoard);
        })
      )
      .subscribe();
  }

  private reset(): void {
    this.gameBoard = new Array(100).fill('').map((item: string, index: number) => {
      return { id: item + '' + index, holder: Holder.Sistem, isActive: false };
    });
    this.gameSubject.next(this.gameBoard);
    const currentStatus = this.gameStatusSubject.value;
    this.gameStatusSubject.next({
      ...currentStatus,
      playerScore: 0,
      computerScore: 0,
      isOver: false,
    });
  }

  public cellClick(id: string): void {
    this.gameBoard = this.gameBoard.map((item) => {
      if (item.id === id && item.isActive) {
        const currentStatus = this.gameStatusSubject.value;
        this.gameStatusSubject.next({
          ...currentStatus,
          playerScore: currentStatus.playerScore + 1,
        });
        return { ...item, isActive: false, holder: Holder.Player };
      }
      return item;
    });
    this.gameSubject.next(this.gameBoard);
  }

  checkGameOver(): boolean {
    const currentStatus = this.gameStatusSubject.value;
    if (currentStatus.playerScore >= 10 || currentStatus.computerScore >= 10) {
      this.gameStatusSubject.next({
        ...currentStatus,
        gameInProgress: false,
        isOver: true,
      });
      console.log('Game over!!!');
      return true;
    }
    return false;
  }
}
