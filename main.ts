'use strict';


let currentLine: number = 2;


function readLine(inputLines: string[]): string {
    return inputLines[currentLine++];
}


const main = (inputLines: string[] = []) => {
    
    const rows: string = inputLines[1][0];
    const arr: number[][] = Array(JSON.parse(rows));

    for (let i: number = 2; i < JSON.parse(rows)+2; i++) {
        arr[i-2] = readLine(inputLines).replace(/\s+$/g, '').split('').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: string = arr.map(row => row.join(' ')).join('\n');

    process.stdout.write(result + '\n' + '\n')
}
export default main;
