import { Board } from "./Board";
import { PieceBase } from "./pieces/PieceBase";
import { PieceDogLeft } from "./pieces/PieceDogLeft";
import { PieceDogRight } from "./pieces/PieceDogRight";
import { PieceLLeft } from "./pieces/PieceLLeft";
import { PieceLRight } from "./pieces/PieceLRight";
import { PieceSquare } from "./pieces/PieceSquare";
import { PieceStick } from "./pieces/PieceStick";
import { PieceT } from "./pieces/PieceT";
import { Clock } from "./Clock"; // 1. IMPORTAMOS EL RELOJ

export class Tetris {
  private board: Board;
  private isRunning: boolean = false;
  private linesToWin: number;
  private totalLinesCleared: number = 0;
  private clock: Clock; // 2. RESPETAMOS EL UML AGREGANDO EL ATRIBUTO

  constructor(linesToWin: number = 5) {
    this.board = new Board();
    this.linesToWin = linesToWin;
    
    // 3. INICIALIZAMOS EL RELOJ: le pasamos 1000ms (1 segundo) y le decimos que llame a nuestro tick()
    this.clock = new Clock(1000, () => this.tick());
  }

  private getRandomPiece(): PieceBase {
    const pieces = [
      new PieceDogLeft(), new PieceDogRight(), new PieceLLeft(),
      new PieceLRight(), new PieceSquare(), new PieceStick(), new PieceT()
    ];
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
    const randomRotations = Math.floor(Math.random() * 4);
    for (let i = 0; i < randomRotations; i++) {
      randomPiece.rotateRight();
    }
    return randomPiece;
  }

  start(): void {
    this.isRunning = true;
    this.totalLinesCleared = 0;
    
    const initialPiece = this.getRandomPiece();
    this.board.spawnPiece(initialPiece);
    
    // 4. ¡ARRANCAMOS EL RELOJ PARA QUE LAS PIEZAS EMPIECEN A CAER!
    this.clock.start();
  }

  tick(): void {
    if (!this.isRunning) return;
    this.board.moveDown();
  }

  rotateLeft(): void {
    const currentPiece = this.board.getCurrentPiece();
    if (currentPiece) {
      currentPiece.rotateLeft();
    }
  }

  rotateRight(): void {
    const currentPiece = this.board.getCurrentPiece();
    if (currentPiece) {
      currentPiece.rotateRight();
    }
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
      this.isRunning = false; 
      this.clock.stop(); // Si ganamos, apagamos el reloj para que deje de correr
    }
  }
}