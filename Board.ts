import { PieceBase } from "./pieces/PieceBase";

export class Board {
  private grid: number[][];
  // Creamos variables para guardar la pieza actual y sus coordenadas
  private currentPiece: PieceBase | null = null;
  private currentPosition: { x: number, y: number } = { x: 0, y: 0 };

  constructor() {
    this.grid = Array.from({ length: 20 }, () => Array(10).fill(0));
  }

  getGrid(): number[][] {
    return this.grid;
  }

  spawnPiece(piece: PieceBase): void {
    this.currentPiece = piece;
    this.currentPosition = { x: 3, y: 0 }; 
  }

  moveDown(): void {
    if (!this.currentPiece) return;

    const nextY = this.currentPosition.y + 1;
    
    if (this.isValidPosition(this.currentPiece, this.currentPosition.x, nextY)) {
      this.currentPosition.y = nextY;
    }
  }

  private isValidPosition(piece: PieceBase, newX: number, newY: number): boolean {
    const form = piece.getForm(); 

    for (let row = 0; row < form.length; row++) {
      for (let col = 0; col < form[row].length; col++) {
        
        if (form[row][col] !== 0) {
          const boardY = newY + row; 

          if (boardY >= 20) {
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
}