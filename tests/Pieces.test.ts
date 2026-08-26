import { describe, expect, test } from "vitest";
import { Tetris } from "../Tetris"; // Ajustá la ruta según dónde hayas guardado el archivo

describe("Tetris", () => {
  test("debe crear una instancia de la clase Tetris correctamente", () => {
    const t = new Tetris();
    expect(t).toBeDefined(); 
  });
});