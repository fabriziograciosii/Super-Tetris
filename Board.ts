import { PieceBase } from "./pieces/PieceBase";

export class Board {
  private grid: number[][];
  private currentPiece: PieceBase | null = null;
  private currentPosition: { x: number, y: number } = { x: 0, y: 0 };
  private score: number = 0;

  constructor() {
    this.grid = Array.from({ length: 20 }, () => Array(10).fill(0));
  }

  getGrid(): number[][] {
    return this.grid;
  }

  spawnPiece(piece: PieceBase): boolean {
    const startX = 3;
    const startY = 0;
    const isInvalid = !this.isValidPosition(piece, startX, startY);
    
    !isInvalid ? (this.currentPiece = piece, this.currentPosition = { x: startX, y: startY }) : null;
    
    return isInvalid;
  }

  moveDown(): void {
    const nextY = this.currentPosition.y + 1;
    this.currentPiece && this.isValidPosition(this.currentPiece, this.currentPosition.x, nextY) 
        ? (this.currentPosition.y = nextY) 
        : null;
  }

  moveLeft(): void {
    const nextX = this.currentPosition.x - 1;
    this.currentPiece && this.isValidPosition(this.currentPiece, nextX, this.currentPosition.y) 
        ? (this.currentPosition.x = nextX) 
        : null;
  }

  moveRight(): void {
    const nextX = this.currentPosition.x + 1;
    this.currentPiece && this.isValidPosition(this.currentPiece, nextX, this.currentPosition.y) 
        ? (this.currentPosition.x = nextX) 
        : null;
  }

  lockPiece(): void {
    const form = this.currentPiece?.getForm() || [];
    const { x, y } = this.currentPosition;

    form.forEach((rowArr, row) => {
        rowArr.forEach((cell, col) => {
            cell !== 0 ? (this.grid[y + row][x + col] = cell) : null;
        });
    });

    this.currentPiece = null;
  }

  clearLines(): number {
    let linesCleared = 0;
    
    for (let row = this.grid.length - 1; row >= 0; row--) {
        const isRowComplete = this.grid[row].every(cell => cell !== 0);
        isRowComplete 
            ? (this.grid.splice(row, 1), this.grid.unshift(Array(10).fill(0)), linesCleared++, row++) 
            : null;
    }

    const scoreKeys: Record<number, number> = { 0: 0, 1: 100, 2: 300, 3: 500 };
    this.score += linesCleared >= 4 ? 800 : (scoreKeys[linesCleared] || 0);

    return linesCleared;
  }

  private isValidPosition(piece: PieceBase, newX: number, newY: number): boolean {
    return !piece.getForm().some((row, r) => 
        row.some((cell, c) => {
            const boardY = newY + r;
            const boardX = newX + c;
            const outOfBounds = boardX < 0 || boardX >= 10 || boardY < 0 || boardY >= 20;
            return cell !== 0 && (outOfBounds || this.grid[boardY][boardX] !== 0);
        })
    );
  }

  getCurrentPiece(): PieceBase | null {
    return this.currentPiece;
  }

  getCurrentPosition(): { x: number, y: number } {
    return this.currentPosition;
  }

  getScore(): number {
    return this.score;
  }
}