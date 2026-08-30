import { PieceBase } from "./PieceBase";

export class PieceStick extends PieceBase {
  constructor() {
    super();
    this.setName("Stick");
    this.setColor("Red");
    this.setForm([
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
      ],
      [
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    ]);
  }
}
