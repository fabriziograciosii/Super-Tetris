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

    // Verificamos si hay espacio antes de spawnear
    if (!this.isValidPosition(piece, startX, startY)) {
      return true; // ¡Game Over!
    }

    this.currentPiece = piece;
    this.currentPosition = { x: startX, y: startY };
    return false; // Todo normal
  }

  moveDown(): void {
    if (!this.currentPiece) return;

    const nextY = this.currentPosition.y + 1;
    
    if (this.isValidPosition(this.currentPiece, this.currentPosition.x, nextY)) {
      this.currentPosition.y = nextY;
    }
  }

  moveLeft(): void {
    if (!this.currentPiece) return;

    const nextX = this.currentPosition.x - 1;
    
    if (this.isValidPosition(this.currentPiece, nextX, this.currentPosition.y)) {
      this.currentPosition.x = nextX;
    }
  }

  moveRight(): void {
    if (!this.currentPiece) return;

    const nextX = this.currentPosition.x + 1;
    
    if (this.isValidPosition(this.currentPiece, nextX, this.currentPosition.y)) {
      this.currentPosition.x = nextX;
    }
  }

  lockPiece(): void {
    if (!this.currentPiece) return;
    
    const form = this.currentPiece.getForm();
    const { x, y } = this.currentPosition;

    for (let row = 0; row < form.length; row++) {
        for (let col = 0; col < form[row].length; col++) {

            if (form[row][col] !== 0) {
                const boardY = y + row;
                const boardX = x + col;

                this.grid[boardY][boardX] = form[row][col];
            }
        }
    }

    this.currentPiece = null;
  }

  clearLines(): number {
    let linesCleared = 0;
    
    for (let row = this.grid.length - 1; row >= 0; row--) {
        const isRowComplete = this.grid[row].every(cell => cell !== 0);

        if (isRowComplete) {
            this.grid.splice(row, 1);
            this.grid.unshift(Array(10).fill(0));
            
            linesCleared++;
            row++;
        }
    }

    if (linesCleared === 1) {
        this.score += 100;
    } else if (linesCleared === 2) {
        this.score += 300;
    } else if (linesCleared === 3) {
        this.score += 500;
    } else if (linesCleared >= 4) {
        this.score += 800;
    }

    return linesCleared;
  }

  private isValidPosition(piece: PieceBase, newX: number, newY: number): boolean {
    const form = piece.getForm(); 

    for (let row = 0; row < form.length; row++) {
      for (let col = 0; col < form[row].length; col++) {
        
        if (form[row][col] !== 0) {
          const boardY = newY + row; 
          const boardX = newX + col; 

          // 1. Validar límites de la pantalla
          if (boardX < 0 || boardX >= 10 || boardY < 0 || boardY >= 20) {
            return false; 
          }

          // 2. ¡NUEVO! Validar si la celda del tablero ya está ocupada por otra pieza fija
          if (this.grid[boardY][boardX] !== 0) {
            return false;
          }
        }
      }
    }
    return true; 
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