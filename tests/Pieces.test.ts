import { describe, expect, test } from "vitest";
import { PieceDogLeft } from "../pieces/PieceDogLeft";

describe("Tetris", () => {
  test("debe crear la PieceDogLeft", () => {
    const piecedogleft = new PieceDogLeft();

    expect(piecedogleft.getName()).toBe("Dog");
  });
});