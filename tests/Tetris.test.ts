import { describe, test, expect } from "vitest";
import { Tetris } from "../Tetris";

describe("Controlador principal del juego Tetris", () => {
  test("Debe poder crearse y comenzar correctamente", () => {
    const tetris = new Tetris();
    tetris.start();
    
    expect(tetris).toBeDefined();
  });
});
