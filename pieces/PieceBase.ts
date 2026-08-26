import { IRotaror } from "../interfaces/IRotator";

export class PieceBase {
    protected _name: string;
    protected _color: string;
    protected _form: number[][];

    protected  setName(value:string) {
        this._name = value;
    }

    protected  setColor(value:string) {
        this._color = value;
    }

    protected  setForm(value:number[][] ) {
        this._form = value; 
    }

    getName(): string {
        return this._name;
    }

    getColor(): string {
        return this._color;
    }

    getForm(): number[][] {
        return this._form;
    }

    constructor() {
    }
}