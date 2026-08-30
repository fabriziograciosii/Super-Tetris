import { PieceBase } from "./PieceBase";

export class Square extends PieceBase {
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
