import main from './src/main';

let inputString: string = '';
let inputLines: string[] = [];


process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin; 
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main(inputLines);
});
