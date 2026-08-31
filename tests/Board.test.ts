import { describe, expect, test } from "vitest";
import { Board } from "../Board";
import { PieceSquare } from "../pieces/PieceSquare";

describe("Tablero de Tetris", () => {
    test("Debe crearse un vacio con 20 filas y 10 columnas", () => {
        const board = new Board();
        const grid = board.getGrid();

        expect(grid.length).toBe(20);
        expect(grid[0].length).toBe(10);

        const allZeros = grid.every((row) => row.every((cell) => cell === 0));
        expect(allZeros).toBe(true);

    });

    test("Debe recibir una pieza nueva y posicionarla en el centro superior", () => {
        const board = new Board();
        const piece = new PieceSquare();

        board.spawnPiece(piece);
        expect(board.getCurrentPiece()).toBe(piece);
        expect(board.getCurrentPosition()).toEqual({ x: 3, y: 0 });
    });

    test("Debe mover la pieza hacia abajo un casillero", () => {
        const board = new Board();
        const piece = new PieceSquare();

        board.spawnPiece(piece);
        board.moveDown();

        expect(board.getCurrentPosition()).toEqual({ x: 3, y: 1 });
    });
});