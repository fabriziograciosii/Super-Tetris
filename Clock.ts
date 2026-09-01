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

  public start(): void {
    this._intervalId !== null 
        ? null 
        : (this._intervalId = setInterval(() => {
            this._ticksCount++;
            this._onTick();
          }, this._tickRate));
  }

  public stop(): void {
    this._intervalId !== null 
        ? (clearInterval(this._intervalId), this._intervalId = null) 
        : null;
  }

  public setSpeed(newTickRate: number): void {
    this.setTickRate(newTickRate);
    this._intervalId !== null ? (this.stop(), this.start()) : null;
  }

  protected setTickRate(newTickRate: number): void {
    this._tickRate = newTickRate;
  }
  
  public getTickRate(): number {
    return this._tickRate;
  }

  public getTicks(): number {
    return this._ticksCount;
  }

  protected setOnTick(newOnTick: () => void): void {
    this._onTick = newOnTick;
  }

  public getOnTick(): () => void {
    return this._onTick;
  }

  protected setIntervalId(newIntervalId: ReturnType<typeof setInterval> | null): void {
    this._intervalId = newIntervalId;
  }

  public getIntervalId(): ReturnType<typeof setInterval> | null {
    return this._intervalId;
  }

  protected setTicksCount(newTicksCount: number): void {
    this._ticksCount = newTicksCount;
  }

  public getTicksCount(): number {
    return this._ticksCount;
  }
}