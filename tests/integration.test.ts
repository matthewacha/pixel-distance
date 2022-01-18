import { mockProcessStdout } from 'jest-mock-process';
import main from '../src/main';

let inputString: string[] = ['1', '3 4', '0001', '0011', '0110', ''];
const mockResult: number[][] = [[3, 2, 1, 0], [2, 1, 0, 0], [1, 0, 0, 1]];

describe('Test that correct matrix is generated through main function', () => {
    it('It prints correct result to stdout on running main() ', async () => {
        const result: string = mockResult.map(row => row.join(' ')).join('\n');
        const mockStdout = mockProcessStdout();
        main(inputString)
        expect(mockStdout).toHaveBeenCalledWith(result + '\n' + '\n');
        process.stdout.destroy()
    })
})
