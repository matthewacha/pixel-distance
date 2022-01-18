'use strict';


export const generateMatrix: (m: number, n:number) => number[][] = (m,n) => {
    return Array.from({length: m}, (v, i) => generateRow(n));
}

const generateRow = len => {
    return Array.from({length: len}, (v, i) => 0);
}

export const findNearestWhitePixel:(p1:number[], p2:number[], matrix: number[][]) => number = (m, n, matrix) => {
    return 8
}
