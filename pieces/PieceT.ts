import { PieceBase } from "./PieceBase";

export class PieceT extends PieceBase {
  constructor() {
    super();
    this.setName("T");
    this.setColor("Green");
    this.setForm([
      [
        [1, 0, 0],
        [1, 1, 0],
        [1, 0, 0],
      ],
      [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0],
      ],
      [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0],
      ],
      [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
      ],
    ]);
  }
}
