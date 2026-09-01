import { Board } from "./Board";
import { PieceBase } from "./pieces/PieceBase";
import { PieceDogLeft } from "./pieces/PieceDogLeft";
import { PieceDogRight } from "./pieces/PieceDogRight";
import { PieceLLeft } from "./pieces/PieceLLeft";
import { PieceLRight } from "./pieces/PieceLRight";
import { PieceSquare } from "./pieces/PieceSquare";
import { PieceStick } from "./pieces/PieceStick";
import { PieceT } from "./pieces/PieceT";
import { Clock } from "./Clock"; 

export class Tetris {
  private board: Board;
  private isRunning: boolean = false;
  private linesToWin: number;
  private totalLinesCleared: number = 0;
  private clock: Clock; 

  constructor(linesToWin: number = 5) {
    this.board = new Board();
    this.linesToWin = linesToWin;
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
    this.clock.start();
  }

  tick(): void {
    this.isRunning ? this.board.moveDown() : null;
  }

  rotateLeft(): void {
    const piece = this.board.getCurrentPiece();
    piece ? piece.rotateLeft() : null;
  }

  rotateRight(): void {
    const piece = this.board.getCurrentPiece();
    piece ? piece.rotateRight() : null;
  }

  state(): boolean {
    return this.isRunning;
  }

  getBoard(): Board {
    return this.board;
  }

  checkWinCondition(linesClearedThisTurn: number): void {
    this.totalLinesCleared += linesClearedThisTurn;
    const gameWon = this.totalLinesCleared >= this.linesToWin;
    this.isRunning = gameWon ? false : this.isRunning;
    gameWon ? this.clock.stop() : null;
  }
}