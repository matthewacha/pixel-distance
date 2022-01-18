'use strict';


export const generateMatrix: (m: number, n: number) => number[][] = (m, n) => {
    return Array.from({ length: m }, (v, i) => generateRow(n));
}

export const generateRow: (len: number) => number[] = len => {
    return Array.from({ length: len }, (v, i) => 0);
}

export const distance: (p1: [number, number], p2: [number, number]) => number = (p1, p2) => {
    const val: number = Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])
    return val
}

export const getMinMax:(val1:number, val2:number) => number = (val1, val2) => {
    let val = Math.min(val1, val2)
    if (val1 === 0 || val2 === 0) {
        val = Math.max(val1, val2)
    }
    return val
}


export const findNearestWhitePixel:
    (p1: [number, number], p2: [number, number], matrix: number[][], visited: { [key: string]: number })
        => number = (p1, p2, matrix, visited) => {
            visited[p1.toString()] = matrix[p1[0]][p1[1]]

            const white: boolean = matrix[p1[0]][p1[1]] === 1
            if (white) {
                return distance(p1, p2)
            }

            // move down right
            const down: [number, number] = [p1[0] + 1, p1[1]]
            const right: [number, number] = [p1[0], p1[1] + 1]
            let vd: number = 0;
            let vr: number = 0;
            if (matrix.hasOwnProperty(p1[0] + 1) && !visited.hasOwnProperty(down.toString())) {
                vd = findNearestWhitePixel(down, p2, matrix, visited)
            }
            if (matrix[p1[0]].hasOwnProperty(p1[1] + 1) && !visited.hasOwnProperty(right.toString())) {
                vr = findNearestWhitePixel(right, p2, matrix, visited)
            }

            let bRight = getMinMax(vr, vd)


            // move up left
            const up: [number, number] = [p1[0] - 1, p1[1]]
            const left: [number, number] = [p1[0], p1[1] - 1]
            let vu: number = 0;
            let vl: number = 0;
            if (matrix.hasOwnProperty(p1[0] - 1) && !visited.hasOwnProperty(up.toString())) {
                vu = findNearestWhitePixel(up, p2, matrix, visited)
            }
            if (matrix[p1[0]].hasOwnProperty(p1[1] - 1) && !visited.hasOwnProperty(left.toString())) {
                vl = findNearestWhitePixel(left, p2, matrix, visited)
            }
            let tLeft = getMinMax(vu, vl);

            const final = getMinMax(tLeft, bRight)
            return final
        }
