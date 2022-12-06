import { readLines } from './utils/readLines.js';

const input = readLines('05');

const EMPTY_CRATE = '###';
const COLUMNS_AMOUNT = 9;
const ROWS_AMOUNT = 8;

const cratesPart1 = Array.from({ length: COLUMNS_AMOUNT }, () => []);

input
  .slice(0, ROWS_AMOUNT)
  .map((row) => row
    .replaceAll(/(?<!\S)\s{4}/g, `${EMPTY_CRATE} `)
    .split(' ')
    .forEach((crate, idx) => crate !== EMPTY_CRATE && cratesPart1[idx].push(crate)));

const instructions = input
  .slice(ROWS_AMOUNT + 2, -1)
  .map((instruction) => {
    const commands = instruction
      .split(' ');

    return {
      amount: +commands[1],
      from: +commands[3] - 1, // because we count indexes from 1 in the input file
      to: +commands[5] - 1, // as above
    };
  });

const cratesPart2 = [...cratesPart1];

for (const { amount, from, to } of instructions) {
  // Part 1
  cratesPart1[to] = [...cratesPart1[from].slice(0, amount).reverse(), ...cratesPart1[to]];
  cratesPart1[from] = cratesPart1[from].slice(amount);

  // Part 2
  cratesPart2[to] = [...cratesPart2[from].slice(0, amount), ...cratesPart2[to]];
  cratesPart2[from] = cratesPart2[from].slice(amount);
}

const part1 = cratesPart1.map((row) => row[0][1]).join('');
const part2 = cratesPart2.map((row) => row[0][1]).join('');

console.log('Day 05:', { part1, part2 });

export { part1, part2 };
