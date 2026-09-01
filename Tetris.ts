import { Board } from "./Board";
import { PieceSquare } from "./pieces/PieceSquare"; 

export class Tetris {
  private board: Board;
  private isRunning: boolean = false;
  private linesToWin: number;
  private totalLinesCleared: number = 0;

  constructor(linesToWin: number = 5) {
    this.board = new Board();
    this.linesToWin = linesToWin;
  }

  start(): void {
    this.isRunning = true;
    this.totalLinesCleared = 0;
    
    const initialPiece = new PieceSquare();
    this.board.spawnPiece(initialPiece);
  }

  tick(): void {
    if (!this.isRunning) return;
    

    this.board.moveDown();
  }

  rotateLeft(): void {
  
  }

  rotateRight(): void {

  }

  state(): boolean {
    return this.isRunning;
  }

  getBoard(): Board {
    return this.board;
  }

  checkWinCondition(linesClearedThisTurn: number): void {
    this.totalLinesCleared += linesClearedThisTurn;
    
    if (this.totalLinesCleared >= this.linesToWin) {
      this.isRunning = false; // Finaliza el juego por victoria
    }
  }
}