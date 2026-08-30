import { PieceBase } from "./PieceBase";

export class PieceLLeft extends PieceBase {
  constructor() {
    super();
    this.setName("L Left");
    this.setColor("Yellow");
    this.setForm([
      [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
      ],
      [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0],
      ],
      [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 0],
      ],
    ]);
  }
}
