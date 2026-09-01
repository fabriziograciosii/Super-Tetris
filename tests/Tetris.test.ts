import { describe, test, expect } from "vitest";
import { Tetris } from "../Tetris";

describe("Controlador principal del juego Tetris", () => {
  test("Debe poder crearse y comenzar correctamente", () => {
    const tetris = new Tetris(5); 
    tetris.start();
    expect(tetris.state()).toBe(true); 
  });

  test("En cada tick, la pieza actual debe bajar una fila", () => {
    const tetris = new Tetris(5);
    tetris.start();
    const board = tetris.getBoard();
    const posicionInicialY = board.getCurrentPosition().y; 
    tetris.tick(); 
    expect(board.getCurrentPosition().y).toBe(posicionInicialY + 1);
  });

  test("El juego debe finalizar (victoria) al completar X lineas", () => {
    const lineasParaGanar = 2;
    const tetris = new Tetris(lineasParaGanar);
    tetris.start();
    const board = tetris.getBoard();
    const grid = board.getGrid();
    
    for (let col = 0; col < 10; col++) {
      grid[18][col] = 1;
      grid[19][col] = 1;
    }
    
    const lineasLimpiadas = board.clearLines();
    tetris.checkWinCondition(lineasLimpiadas); 
    expect(tetris.state()).toBe(false); 
  });

  test("Al iniciar el juego, debe spawnear una pieza aleatoria en el tablero", () => {
    const tetris = new Tetris();
    const board = tetris.getBoard();
    expect(board.getCurrentPiece()).toBeNull(); 
    tetris.start();
    const currentPiece = board.getCurrentPiece();
    expect(currentPiece).not.toBeNull();
    expect(currentPiece?.getForm().length).toBeGreaterThan(0); 
  });

  test("Debe rotar la pieza correctamente y no fallar si no hay pieza en el tablero", () => {
    const tetris = new Tetris();
    tetris.rotateLeft(); 
    tetris.rotateRight(); 
    expect(tetris.getBoard().getCurrentPiece()).toBeNull(); 
    tetris.start();
    tetris.rotateLeft();
    tetris.rotateRight();
    expect(tetris.getBoard().getCurrentPiece()).not.toBeNull(); 
  });
});