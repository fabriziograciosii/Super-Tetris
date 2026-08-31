import { Board } from "./Board";
import { PieceBase } from "./pieces/PieceBase"; 
import { PieceSquare } from "./pieces/PieceSquare";

export class Tetris {
    private board: Board;
    private isRunning: boolean = false;

    constructor() {
        this.board = new Board();
    }

    start(): void {
        this.isRunning = true;

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
}