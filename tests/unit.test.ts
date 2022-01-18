import traverseMatrixColor from '../traverse';
import { generateMatrix , findNearestWhitePixel, distance, getMinMax } from '../utils';

const matrix: number[][] = [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]];
const mockResult: number[][] = [[3, 2, 1, 0], [2, 1, 0, 0], [1, 0, 0, 1]];
let visited: { [key: string]: number } = {};


describe('Test getMinMax helper', () => {
    it('test it returns an integer', () => {
        const result: number = getMinMax(4,5);
        expect(typeof result).toBe('number')
    })

    it('test it returns the lowest value if neither is 0', () => {
        const result: number = getMinMax(4,5);
        expect(result).toBe(4)
    })

    it('test it returns the highest value if one is 0', () => {
        const result: number = getMinMax(0,2);
        expect(result).toBe(2)
    })
})

describe('Test distance between pixels', () => {
    it('test it returns an integer', () => {
        const result: number = distance([0,0],[0,1]);
        expect(typeof result).toBe('number')
    })

    it('test it returns a correct distance', () => {
        const result: number = distance([0,0],[1,1]);
        expect(result).toBe(2)
    })
})

describe('Test findNearestPixel', () => {
    it('test it returns an integer', () => {
        const result: number = findNearestWhitePixel([0,0],[0,0], [[0,1]], visited);
        visited = {}
        expect(typeof result).toBe('number')
    })

    it('test it returns a correct value', () => {
        const result: number = findNearestWhitePixel([0,0],[0,0], matrix, visited);
        expect(result).toBe(3)
    })
})

describe('test utils', () => {
    it('test generate matrix', () => {
        const newMatrix: number[][] = generateMatrix(3, 3);
        const result: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        expect(newMatrix.toString()).toBe(result.toString())
    })
})

describe('Test travers matrix function', () => {

    it('test base case of 1 X 1 matrix of value 0', () => {
        const distanceMatrix: number[][] = traverseMatrixColor(1, 1, [[0]]);
        expect(distanceMatrix.toString()).toBe([[0]].toString())
    });

    it('test base case of 1 X 1 matrix of value 1', () => {
        const distanceMatrix: number[][] = traverseMatrixColor(1, 1, [[0]]);
        expect(distanceMatrix.toString()).toBe([[0]].toString())
    })

    it('check that the right matrix is return when traversMatrixColor is run', () => {
        const distanceMatrix: number[][] = traverseMatrixColor(3, 4, matrix);
        expect(distanceMatrix.toString()).toBe(mockResult.toString())
    })
})
