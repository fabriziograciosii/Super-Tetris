import { PieceBase } from "./PieceBase";

export class PieceLRight extends PieceBase {
  constructor() {
    super();
    this.setName("L Right");
    this.setColor("Violet");
    this.setForm([
      [
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 0],
      ],
      [
        [1, 1, 1],
        [1, 0, 0],
        [0, 0, 0],
      ],
      [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ],
      [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
      ],
    ]);
  }
}
