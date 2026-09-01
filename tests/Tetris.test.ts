import { describe, test, expect } from "vitest";
import { Tetris } from "../Tetris";

describe("Controlador principal del juego Tetris", () => {
  test("Debe poder crearse y comenzar correctamente", () => {
    // Le pasamos '5' como la cantidad de líneas para ganar (Requerimiento 5)
    const tetris = new Tetris(5); 
    tetris.start();
    
    expect(tetris.state()).toBe(true); // isRunning debería ser true
  });

  test("En cada tick, la pieza actual debe bajar una fila", () => {
    const tetris = new Tetris(5);
    tetris.start();
    
    const board = tetris.getBoard();
    const posicionInicialY = board.getCurrentPosition().y; // Debería ser 0
    
    tetris.tick(); // Simulamos que el reloj avanzó 1 segundo
    
    expect(board.getCurrentPosition().y).toBe(posicionInicialY + 1);
  });

  test("El juego debe finalizar (victoria) al completar X lineas", () => {
    const lineasParaGanar = 2;
    const tetris = new Tetris(lineasParaGanar);
    tetris.start();
    
    const board = tetris.getBoard();
    const grid = board.getGrid();
    
    // Trucamos el tablero para simular 2 líneas a punto de romperse
    for (let col = 0; col < 10; col++) {
      grid[18][col] = 1;
      grid[19][col] = 1;
    }
    
    // Forzamos la limpieza de líneas que ocurriría al bloquear una pieza
    const lineasLimpiadas = board.clearLines();
    tetris.checkWinCondition(lineasLimpiadas); // Nuevo método a crear
    
    // Si limpió 2 líneas y el objetivo era 2, el juego debe terminar
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
});