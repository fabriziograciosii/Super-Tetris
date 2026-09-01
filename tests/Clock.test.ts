import { describe, expect, test, vi, beforeEach, afterEach } from "vitest";
import { Clock } from "../Clock"; 

describe("Clock", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  test("Debe ejecutar la funcion onTick despues del tiempo establecido", () => {
    const onTickMock = vi.fn();
    const clock = new Clock(1000, onTickMock);
    
    clock.start();
    expect(onTickMock).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1000);
    expect(onTickMock).toHaveBeenCalledTimes(1);
  });

  test("Debe dejar de ejecutar onTick cuando se llama a stop()", () => {
    const onTickMock = vi.fn();
    const clock = new Clock(1000, onTickMock);
    
    clock.start();
    vi.advanceTimersByTime(1000);
    expect(onTickMock).toHaveBeenCalledTimes(1); 
    
    clock.stop();
    vi.advanceTimersByTime(1000);
    expect(onTickMock).toHaveBeenCalledTimes(1);
  });

  test("Debe cambiar la velocidad correctamente con setSpeed()", () => {
    const onTickMock = vi.fn();
    const clock = new Clock(1000, onTickMock);
    
    clock.start();
    clock.setSpeed(500);
    vi.advanceTimersByTime(500);
    expect(onTickMock).toHaveBeenCalledTimes(1);
  });

  test("Debe contar de a 1 cada avance del tick", () => {
    const onTickMock = vi.fn();
    const clock = new Clock(1000, onTickMock);

    expect(clock.getTicks()).toBe(0);
    clock.start();
    vi.advanceTimersByTime(3000);
    expect(clock.getTicks()).toBe(3);
  });
});