import { PieceBase } from "./PieceBase";

export class PieceDogLeft extends PieceBase {

    constructor() {
        super();
        this.setName("Dog");
        this.setColor("Brown");
        this.setForm(
            [
            [1, 1, 0],
            [0, 1, 1],
        ]

        );
    }
}