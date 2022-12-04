import { readFile } from './utils/readLines.js'

const POINTS_FOR_WIN = 6
const POINTS_FOR_DRAW = 3
const POINTS_FOR_LOSE = 0

const rules = {
  // ROCK
  A: {
    wins: 'C',
    loses: 'B',
    points: 1
  },
  // PAPER
  B: {
    wins: 'A',
    loses: 'C',
    points: 2
  },
  // SCISSORS
  C: {
    wins: 'B',
    loses: 'A',
    points: 3
  }
}

const xyzToAbc = {
  X: 'A',
  Y: 'B',
  Z: 'C'
}

const calcScore = (p1, p2) => {
  let score = rules[p2].points

  if (p1 === p2) {
    score += POINTS_FOR_DRAW
  } else if (p1 === rules[p2].wins) {
    score += POINTS_FOR_WIN
  } else {
    score += POINTS_FOR_LOSE
  }

  return score
}

const secretStrategy = ([p1, p2]) => {
  const movesMapped = [p1]

  switch (p2) {
    case 'X':
      // P2 needs to lose
      movesMapped.push(rules[p1].wins)
      break
    case 'Y':
      // P2 needs to draw
      movesMapped.push(p1)
      break
    case 'Z':
      // P2 needs to win
      movesMapped.push(rules[p1].loses)
      break
    default:
      break
  }

  return movesMapped
}

const input = readFile('02').map(pair => [pair[0], pair[2]])

const part1 = input
  .map(([p1, p2]) => calcScore(p1, xyzToAbc[p2]))
  .reduce((total, score) => total + score)

const part2 = input
  .map(secretStrategy)
  .map(([p1, p2]) => calcScore(p1, p2))
  .reduce((total, score) => total + score)

console.log({ part1, part2 })