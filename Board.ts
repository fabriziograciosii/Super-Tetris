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

  // Método para hacer nacer la pieza en el centro arriba
  spawnPiece(piece: PieceBase): void {
    this.currentPiece = piece;
    this.currentPosition = { x: 3, y: 0 }; // x:3 (centro), y:0 (arriba)
  }

  // Métodos para que el test pueda leer qué pieza hay y dónde está
  getCurrentPiece(): PieceBase | null {
    return this.currentPiece;
  }

  getCurrentPosition(): { x: number, y: number } {
    return this.currentPosition;
  }
}