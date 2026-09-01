export class Clock {
  // encaps los atributos de la clase para que no sean publicos
  private _tickRate: number;
  private _onTick: () => void;
  private _intervalId: ReturnType<typeof setInterval> | null;
  private _ticksCount: number = 0; 


  constructor(tickRate: number, onTick: () => void) {
    this._tickRate = tickRate;
    this._onTick = onTick;
    this._intervalId = null; // inicia en cero o apagado
  }

  // interfaz puesta como pública para ver el tiempo

  public start(): void {
    // Si ya hay un intervalo corriendo, no hacemos nada para evitar que se superpongan
    if (this._intervalId !== null) return; 
    
    // Guardamos el ID del intervalo para poder frenarlo después
    this._intervalId = setInterval(() => {
      this._ticksCount++; // Suma 1 a nuestro contador
      this._onTick();
    }, this._tickRate);
  }

  public stop(): void {
    if (this._intervalId !== null) {
      clearInterval(this._intervalId);
      this._intervalId = null; // Reseteamos el estado
    }
  }

  public setSpeed(newTickRate: number): void {
    this._tickRate = newTickRate;
    
    // si el reloj ya está corriendo habria que frenar y volverlo a arrancar desde cero o apagado
    if (this._intervalId !== null) {
      this.stop();
      this.start();
    }
  }

  // AGREGADO: Método para que Vitest pueda leer cuántos ticks pasaron (Requerimiento Test 4)
  public getTicks(): number {
    return this._ticksCount;
  }
}