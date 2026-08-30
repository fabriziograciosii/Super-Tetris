import { IRotator } from "../interfaces/IRotator";

export class PieceBase implements IRotator {
  private _name: string = "";
  private _color: string = "";
  private _forms: number[][][] = [];
  private _index: number = 0;

  constructor() {}

  protected setName(value: string) {
    this._name = value;
  }

  protected setColor(value: string) {
    this._color = value;
  }

  protected setForm(value: number[][][]) {
    this._forms = value.map((form) => form.map((row) => [...row]));
    this._index = 0;
  }

  getName(): string {
    return this._name;
  }

  getColor(): string {
    return this._color;
  }

  getForm(): number[][] {
    return this._forms[this._index].map((row) => [...row]);
  }

  rotateRight(): void {
    this._index = (this._index + 1) % this._forms.length;
  }

  rotateLeft(): void {
    this._index = (this._index - 1 + this._forms.length) % this._forms.length;
  }
}
