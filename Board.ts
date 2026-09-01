import { PieceBase } from "./pieces/PieceBase";

export class Board {
  private grid: number[][];
  private currentPiece: PieceBase | null = null;
  private currentPosition: { x: number; y: number } = { x: 0, y: 0 };
  private score: number = 0;

  constructor() {
    this.grid = this.setGrid();
  }

  protected setGrid(): number[][] {
    const newgrid = Array.from({ length: 20 }, () => Array(10).fill(0));
    this.grid = newgrid;
    return this.grid;
  }

  public getGrid(): number[][] {
    return this.grid;
  }

  protected setCurrentPiece(piece: PieceBase | null): PieceBase | null {
    this.currentPiece = piece;
    return this.currentPiece;
  }

  public getCurrentPiece(): PieceBase | null {
    return this.currentPiece;
  }

  protected setCurrentPosition(x: number, y: number): { x: number; y: number } {
    this.currentPosition = { x, y };
    return this.currentPosition;
  }

  public getCurrentPosition(): { x: number; y: number } {
    return this.currentPosition;
  }

  protected setScore(value: number): void {
    this.score = value;
  }

  public getScore(): number {
    return this.score;
  }

  public spawnPiece(piece: PieceBase): boolean {
    const startX = 3;
    const startY = 0;
    const isInvalid = !this.isValidPosition(piece, startX, startY);
    
    !isInvalid ? (this.setCurrentPiece(piece), this.setCurrentPosition(startX, startY)) : null;
    
    return isInvalid;
  }

  public moveDown(): void {
    const nextY = this.currentPosition.y + 1;
    this.currentPiece && this.isValidPosition(this.currentPiece, this.currentPosition.x, nextY) 
        ? (this.currentPosition.y = nextY) 
        : null;
  }

  public moveLeft(): void {
    const nextX = this.currentPosition.x - 1;
    this.currentPiece && this.isValidPosition(this.currentPiece, nextX, this.currentPosition.y) 
        ? (this.currentPosition.x = nextX) 
        : null;
  }

  public moveRight(): void {
    const nextX = this.currentPosition.x + 1;
    this.currentPiece && this.isValidPosition(this.currentPiece, nextX, this.currentPosition.y) 
        ? (this.currentPosition.x = nextX) 
        : null;
  }

  public lockPiece(): void {
    const form = this.currentPiece?.getForm() || [];
    const { x, y } = this.currentPosition;

    form.forEach((rowArr, row) => {
        rowArr.forEach((cell, col) => {
            cell !== 0 ? (this.grid[y + row][x + col] = cell) : null;
        });
    });

    this.setCurrentPiece(null);
  }

  public clearLines(): number {
    let linesCleared = 0;
    
    for (let row = this.grid.length - 1; row >= 0; row--) {
        const isRowComplete = this.grid[row].every(cell => cell !== 0);
        isRowComplete 
            ? (this.grid.splice(row, 1), this.grid.unshift(Array(10).fill(0)), linesCleared++, row++) 
            : null;
    }

    // Cálculo de puntos usando ternarios puros (sin diccionarios ni 'if')
    const earnedScore = linesCleared === 1 
        ? 100 
        : linesCleared === 2 
        ? 300 
        : linesCleared === 3 
        ? 500 
        : linesCleared >= 4 
        ? 800 
        : 0;

    this.score += earnedScore;

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
}