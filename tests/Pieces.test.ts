import { describe, expect, test } from "vitest";
import { PieceDogLeft } from "../pieces/PieceDogLeft";
import { PieceDogRight } from "../pieces/PieceDogRight";
import { Square } from "../pieces/PieceSquare";

describe("Test de piezas", () => {
  // Piece Dog Left
  test("Piece Dog Left Creacion", () => {
    const piecedogleft = new PieceDogLeft();

    expect(piecedogleft.getName()).toBe("Piece Dog Left");
    expect(piecedogleft.getColor()).toBe("Orange");
    expect(piecedogleft.getForm()).toEqual([
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ]);
  });

  test("Piece Dog Left Rotacion Derecha", () => {
    const piecedogleft = new PieceDogLeft();
    piecedogleft.rotateRight();

    expect(piecedogleft.getForm()).toEqual([
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ]);
  });

  test("Piece Dog Left Rotacion Izquierda", () => {
    const piecedogleft = new PieceDogLeft();
    piecedogleft.rotateLeft();

    expect(piecedogleft.getForm()).toEqual([
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ]);
  });

  // Piece Dog Right
  test("Piece Dog Right Creacion", () => {
    const piecedogright = new PieceDogRight();

    expect(piecedogright.getName()).toBe("Piece Dog Right");
    expect(piecedogright.getColor()).toBe("Sky Blue");
    expect(piecedogright.getForm()).toEqual([
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ]);
  });

  test("Piece Dog Right Rotacion Derecha", () => {
    const piecedogright = new PieceDogRight();
    piecedogright.rotateRight();

    expect(piecedogright.getForm()).toEqual([
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ]);
  });

  test("Piece Dog Right Rotacion Izquierda", () => {
    const piecedogright = new PieceDogRight();
    piecedogright.rotateLeft();

    expect(piecedogright.getForm()).toEqual([
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ]);
  });

  // Piece Square
  test("Piece Square Creacion", () => {
    const piecesquare = new Square();

    expect(piecesquare.getName()).toBe("Square");
    expect(piecesquare.getColor()).toBe("Blue");
    expect(piecesquare.getForm()).toEqual([
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  // El Square sigue manteniendo su posicion original al rotar a la derecha
  test("Piece Square Rotacion Derecha", () => {
    const piecesquare = new Square();
    piecesquare.rotateRight();

    expect(piecesquare.getForm()).toEqual([
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  // El Square sigue manteniendo su posicion original al rotar a la izquierda
  test("Piece Square Rotacion Izquierda", () => {
    const piecesquare = new Square();
    piecesquare.rotateLeft();

    expect(piecesquare.getForm()).toEqual([
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });
});
