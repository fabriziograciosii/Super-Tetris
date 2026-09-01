export class Clock {
  private _tickRate: number;
  private _onTick: () => void;
  private _intervalId: ReturnType<typeof setInterval> | null;
  private _ticksCount: number = 0; 

  constructor(tickRate: number, onTick: () => void) {
    this._tickRate = tickRate;
    this._onTick = onTick;
    this._intervalId = null; 
  }

  start(): void {
    this._intervalId !== null 
        ? null 
        : (this._intervalId = setInterval(() => {
            this._ticksCount++;
            this._onTick();
          }, this._tickRate));
  }

   stop(): void {
    this._intervalId !== null 
        ? (clearInterval(this._intervalId), this._intervalId = null) 
        : null;
  }

   setSpeed(newTickRate: number): void {
    this._tickRate = newTickRate;
    this._intervalId !== null ? (this.stop(), this.start()) : null;
  }

  protected setTickRate(newTickRate: number): void {
    this._tickRate = newTickRate;
  }

  getTickRate(): number {
    return this._tickRate;
  }
   getTicks(): number {
    return this._ticksCount;
  }
}