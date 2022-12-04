import readFile from './utils/readLines.js';

const input = readFile('01', '\n\n').map((elf) => elf.split('\n').filter((e) => e));

const totalCalories = input
  .map((elf) => elf
    .reduce((acc, val) => acc + +val, 0))
  .sort((a, b) => b - a);

const part1 = totalCalories[0];
let part2 = 0;

for (let i = 0; i < 3; i++) {
  part2 += totalCalories[i];
}

console.log('Day 01:', { part1, part2 });

export { part1, part2 };
