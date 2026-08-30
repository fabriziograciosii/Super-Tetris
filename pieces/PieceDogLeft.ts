import { PieceBase } from "./PieceBase";

export class PieceDogLeft extends PieceBase {
  constructor() {
    super();
    this.setName("Piece Dog Left");
    this.setColor("Green");
    this.setForm([
      [1, 1, 0],
      [0, 1, 1],
    ]);
  }
}
