import { PieceBase } from "./PieceBase";

export class PieceSquare extends PieceBase {
  constructor() {
    super();
    this.setName("Square");
    this.setColor("Blue");
    this.setForm([
      [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    ]);
  }
}
