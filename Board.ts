export class Board {

    private grid: number[][];

    constructor() {
        this.grid = Array.from({ length: 20 }, () => Array(10).fill(0));
    }

    getGrid(): number[][] {
        return this.grid;
    }
}