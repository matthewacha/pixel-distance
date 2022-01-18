'use strict';


export const generateMatrix: (m: number, n: number) => number[][] = (m, n) => {
    return Array.from({ length: m }, () => generateRow(n));
}

export const generateRow: (len: number) => number[] = len => {
    return Array.from({ length: len }, () => 0);
}

export const distance: (p1: [number, number], p2: [number, number]) => number = (p1, p2) => {
    const val: number = Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])
    return val
}

export const getMinMax: (val1: number, val2: number) => number = (val1, val2) => {
    let val: number = Math.min(val1, val2)
    if (val1 === 0 || val2 === 0) {
        val = Math.max(val1, val2)
    }
    return val
}


export const findNearestWhitePixel:
    (p1: [number, number], p2: [number, number], matrix: number[][], visited: { [key: string]: number })
        => number = (p1, p2, matrix, visited) => {
            visited[p1.toString()] = matrix[p1[0]][p1[1]]

            const isWhite: boolean = matrix[p1[0]][p1[1]] === 1
            if (isWhite) {
                return distance(p1, p2)
            }

            // move downPixel and rightPixel
            const downPixel: [number, number] = [p1[0] + 1, p1[1]]
            const rightPixel: [number, number] = [p1[0], p1[1] + 1]
            let bottomNearestWhite: number = 0;
            let rightNearestWhite: number = 0;
            if (Object.prototype.hasOwnProperty.call(matrix, p1[0] + 1)
            && !Object.prototype.hasOwnProperty.call(visited, downPixel.toString())) {
                bottomNearestWhite = findNearestWhitePixel(downPixel, p2, matrix, visited)
            }
            if (Object.prototype.hasOwnProperty.call(matrix[p1[0]], p1[1] + 1)
            && !Object.prototype.hasOwnProperty.call(visited, rightPixel.toString())) {
                rightNearestWhite = findNearestWhitePixel(rightPixel, p2, matrix, visited)
            }

            const bottomRightNearest: number = getMinMax(rightNearestWhite, bottomNearestWhite)


            // move upPixel and leftPixel
            const upPixel: [number, number] = [p1[0] - 1, p1[1]]
            const leftPixel: [number, number] = [p1[0], p1[1] - 1]
            let topNearestWhite: number = 0;
            let leftNearestWhite: number = 0;
            if (Object.prototype.hasOwnProperty.call(matrix, p1[0] - 1)
            && !Object.prototype.hasOwnProperty.call(visited, upPixel.toString())) {
                topNearestWhite = findNearestWhitePixel(upPixel, p2, matrix, visited)
            }
            if (Object.prototype.hasOwnProperty.call(matrix[p1[0]], p1[1] - 1)
            && !Object.prototype.hasOwnProperty.call(visited, leftPixel.toString())) {
                leftNearestWhite = findNearestWhitePixel(leftPixel, p2, matrix, visited)
            }
            const topLeftNearest: number = getMinMax(topNearestWhite, leftNearestWhite);

            const final: number = getMinMax(topLeftNearest, bottomRightNearest)
            return final
        }
