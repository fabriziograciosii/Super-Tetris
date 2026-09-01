import { Board } from "./Board";
import { PieceBase } from "./pieces/PieceBase";
import { PieceDogLeft } from "./pieces/PieceDogLeft";
import { PieceDogRight } from "./pieces/PieceDogRight";
import { PieceLLeft } from "./pieces/PieceLLeft";
import { PieceLRight } from "./pieces/PieceLRight";
import { PieceSquare } from "./pieces/PieceSquare";
import { PieceStick } from "./pieces/PieceStick";
import { PieceT } from "./pieces/PieceT";

export class Tetris {
  private board: Board;
  private isRunning: boolean = false;
  private linesToWin: number;
  private totalLinesCleared: number = 0;

  constructor(linesToWin: number = 5) {
    this.board = new Board();
    this.linesToWin = linesToWin;
  }

  // Método privado para generar piezas y rotarlas al azar sin romper el UML
  private getRandomPiece(): PieceBase {
    const pieces = [
      new PieceDogLeft(), new PieceDogRight(), new PieceLLeft(),
      new PieceLRight(), new PieceSquare(), new PieceStick(), new PieceT()
    ];
    
    // Elegimos una al azar
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
    
    // La rotamos aleatoriamente (entre 0 y 3 veces)
    const randomRotations = Math.floor(Math.random() * 4);
    for (let i = 0; i < randomRotations; i++) {
      randomPiece.rotateRight();
    }
    
    return randomPiece;
  }

  start(): void {
    this.isRunning = true;
    this.totalLinesCleared = 0;
    
    // Ahora usamos nuestro método interno en lugar de fijar siempre el Square
    const initialPiece = this.getRandomPiece();
    this.board.spawnPiece(initialPiece);
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
    }
  }
}