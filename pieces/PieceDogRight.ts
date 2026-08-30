import { PieceBase } from "./PieceBase";

export class PieceDogRight extends PieceBase {
  constructor() {
    super();
    this.setName("Piece Dog Right");
    this.setColor("Sky Blue");
    this.setForm([
      [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ],
      [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
      ],
    ]);
  }
}
