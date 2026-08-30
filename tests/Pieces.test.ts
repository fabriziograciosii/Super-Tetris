import { describe, expect, test } from "vitest";
import { PieceDogLeft } from "../pieces/PieceDogLeft";
import { PieceDogRight } from "../pieces/PieceDogRight";
import { PieceSquare } from "../pieces/PieceSquare";
import { PieceStick } from "../pieces/PieceStick";

describe("Piece Dog Left", () => {
  test("Creacion", () => {
    const piecedogleft = new PieceDogLeft();

    expect(piecedogleft.getName()).toBe("Piece Dog Left");
    expect(piecedogleft.getColor()).toBe("Orange");
    expect(piecedogleft.getForm()).toEqual([
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ]);
  });

  test("Rotacion Derecha", () => {
    const piecedogleft = new PieceDogLeft();
    piecedogleft.rotateRight();

    expect(piecedogleft.getForm()).toEqual([
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ]);
  });

  test("Rotacion Izquierda", () => {
    const piecedogleft = new PieceDogLeft();
    piecedogleft.rotateLeft();

    expect(piecedogleft.getForm()).toEqual([
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ]);
  });
});

describe("Piece Dog Right", () => {
  test("Creacion", () => {
    const piecedogright = new PieceDogRight();

    expect(piecedogright.getName()).toBe("Piece Dog Right");
    expect(piecedogright.getColor()).toBe("Sky Blue");
    expect(piecedogright.getForm()).toEqual([
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ]);
  });

  test("Rotacion Derecha", () => {
    const piecedogright = new PieceDogRight();
    piecedogright.rotateRight();

    expect(piecedogright.getForm()).toEqual([
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ]);
  });

  test("Rotacion Izquierda", () => {
    const piecedogright = new PieceDogRight();
    piecedogright.rotateLeft();

    expect(piecedogright.getForm()).toEqual([
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ]);
  });
});

describe("Piece Square", () => {
  test("Piece Square Creacion", () => {
    const piecesquare = new PieceSquare();

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
    const piecesquare = new PieceSquare();
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
    const piecesquare = new PieceSquare();
    piecesquare.rotateLeft();

    expect(piecesquare.getForm()).toEqual([
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });
});

describe("Piece Stick", () => {
  test("Creacion", () => {
    const piecestick = new PieceStick();

    expect(piecestick.getName()).toBe("Stick");
    expect(piecestick.getColor()).toBe("Red");
    expect(piecestick.getForm()).toEqual([
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ]);
  });

  test("Rotacion Derecha", () => {
    const piecestick = new PieceStick();
    piecestick.rotateRight();

    expect(piecestick.getForm()).toEqual([
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  test("Rotacion Izquierda", () => {
    const piecestick = new PieceStick();
    piecestick.rotateLeft();

    expect(piecestick.getForm()).toEqual([
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });
});
