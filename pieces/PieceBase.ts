import { IRotator } from "../interfaces/IRotator";

export class PieceBase implements IRotator {
  private _name: string = "";
  private _color: string = "";
  private _form: number[][] = [];

  constructor() {}

  protected setName(value: string) {
    this._name = value;
  }

  protected setColor(value: string) {
    this._color = value;
  }

  protected setForm(value: number[][]) {
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

  rotateRight(): void {
    const f = this._form;
    this._form = f[0].map((_, i) => f.map((fila) => fila[i]).reverse());
  }

  rotateLeft(): void {
    const f = this._form;
    const cols = f[0].length;
    this._form = f[0].map((_, i) => f.map((fila) => fila[cols - 1 - i]));
  }
}
