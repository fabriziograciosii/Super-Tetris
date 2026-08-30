import { describe, expect, test } from "vitest";
import { PieceDogLeft } from "../pieces/PieceDogLeft";

describe("Test de piezas", () => {
  test("Piece Dog Left", () => {
    const piecedogleft = new PieceDogLeft();

    expect(piecedogleft.getName()).toBe("Piece Dog Left");
    expect(piecedogleft.getColor()).toBe("Green");
    expect(piecedogleft.getForm()).toEqual([
      [1, 1, 0],
      [0, 1, 1],
    ]);

    // Rotar a la derecha
    piecedogleft.rotateRight();
    expect(piecedogleft.getForm()).toEqual([
      [0, 1],
      [1, 1],
      [1, 0],
    ]);

    // Rotar a la izquierda
    piecedogleft.rotateLeft();
    expect(piecedogleft.getForm()).toEqual([
      [1, 1, 0],
      [0, 1, 1],
    ]);
  });
});
