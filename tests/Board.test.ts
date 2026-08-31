import { describe, expect, test } from "vitest";
import { Board } from "../Board";

describe("Tablero de Tetris", () => {
    test("Debe crearse un vacio con 20 filas y 10 columnas", () => {
        const board = new Board();
        const grid = board.getGrid();

        expect(grid.length).toBe(20);
        expect(grid[0].length).toBe(10);

        const allZeros = grid.every((row) => row.every((cell) => cell === 0));
        expect(allZeros).toBe(true);
    });
});