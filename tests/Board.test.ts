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

    test("La pieza no debe atravesar el piso del tablero", () => {
        const board = new Board();
        const piece = new PieceSquare();
        board.spawnPiece(piece);
        for (let i = 0; i < 20; i++) {
            board.moveDown();
        }
        expect(board.getCurrentPosition().y).toBe(18);
    });

    test("La pieza no debe atravesar las paredes laterales", () => {
        const board = new Board();
        const piece = new PieceSquare();
        board.spawnPiece(piece);
        for (let i = 0; i < 10; i++) {
            board.moveLeft();
        }
        expect(board.getCurrentPosition().x).toBe(0);
        for (let i = 0; i < 20; i++) {
            board.moveRight();
        }
        expect(board.getCurrentPosition().x).toBe(8);
    });

    test("Debe fijarse la pieza en la grilla del tablero", () => {
        const board = new Board();
        const piece = new PieceSquare();
        board.spawnPiece(piece);
        for (let i = 0; i < 25; i++) {
            board.moveDown();
        }
        board.lockPiece();
        const grid = board.getGrid();
        expect(grid[18][3]).toBe(1);
        expect(grid[18][4]).toBe(1);
        expect(grid[19][3]).toBe(1);
        expect(grid[19][4]).toBe(1);
    });

    test("Debe detectar y eliminar una linea completa", () => {
        const board = new Board();
        const grid = board.getGrid();
        for (let col = 0; col < 10; col++) {
            grid[18][col] = 1;
        }
        board.clearLines();
        expect(grid[18].every(cell => cell === 0)).toBe(true);
    });

    test("Debe detectar Game Over si la pieza no puede ser colocada en la grilla", () => {
        const board = new Board();
        const grid = board.getGrid();
        for (let col = 0; col < 10; col++) {
            grid[0][col] = 1;
        }
        const piece = new PieceSquare();
        const isGameOver = board.spawnPiece(piece);
        expect(isGameOver).toBe(true);
    });

    test("Debe retornar la cantidad de lineas eliminadas al limpiar la grilla", () => {
        const board = new Board();
        const grid = board.getGrid();
        for (let col = 0; col < 10; col++) {
            grid[18][col] = 1;
            grid[19][col] = 1;
        }
        const linesCleared = board.clearLines();
        expect(linesCleared).toBe(2);
    });

    test("Debe acumular puntos segun la cantidad de lineas eliminadas", () => {
        const board = new Board();
        const grid = board.getGrid();
        for (let col = 0; col < 10; col++) {
            grid[18][col] = 1;
            grid[19][col] = 1;
        }
        board.clearLines();
        expect(board.getScore()).toBe(300);
    });
});