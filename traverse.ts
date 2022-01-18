import { generateMatrix, findNearestWhitePixel } from './utils';


const traverseMatrixColor:(m: number, n:number, matrix: number[][]) => number[][] = (m,n, matrix) => {
    // m = rows
    // n = cols
    let count: number = m*n;
    let col: number = 0
    let distMatrix: number[][] = generateMatrix(m,n)

    for(var i: number = 1; i < count+1; i++){
        const row: number = Math.ceil(i/n)-1
        const item: number[] = [row, col]
        // add logic here to get distance to nearest white pixel
        const dist: number = findNearestWhitePixel(item,item, matrix);

        distMatrix[row][col] = dist
        col += 1
        if(col === n){
            col = 0
        }
    }
    return distMatrix
}

export default traverseMatrixColor;
