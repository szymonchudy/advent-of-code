import readFile from './utils/readLines.js';

const input = readFile('04').map((e) => e.split(',').map((e) => e.split('-').map(Number)));

let part1 = 0;
let part2 = 0;

input.forEach(([r1, r2]) => {
  const range1 = Array.from({ length: r1[1] - r1[0] + 1 }, (_, i) => i + r1[0]);
  const range2 = Array.from({ length: r2[1] - r2[0] + 1 }, (_, i) => i + r2[0]);

  // PART 1
  if (
    range1.every((e) => range2.includes(e))
    || range2.every((e) => range1.includes(e))
  ) {
    part1 += 1;
  }

  // PART 2
  if (
    range1.some((e) => range2.includes(e))
    || range2.some((e) => range1.includes(e))
  ) {
    part2 += 1;
  }
});

console.log('Day 04:', { part1, part2 });

export { part1, part2 };
