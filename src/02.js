import { readFile } from './utils/readLines.js'

const input = readFile('02')

const calcScore = str => {
  let mainPoints = 0
  let additionalPoints = 0

  switch (str) {
    // lose
    case 'A Z':
    case 'B X':
    case 'C Y':
      break
    // win
    case 'A Y':
    case 'B Z':
    case 'C X':
      mainPoints += 6
      break
    // draw
    default:
      mainPoints += 3
      break
  }

  switch (str.at(-1)) {
    case 'A':
    case 'X':
      additionalPoints = 1
      break
    case 'B':
    case 'Y':
      additionalPoints = 2
      break
    case 'C':
    case 'Z':
      additionalPoints = 3
      break
  }

  return mainPoints + additionalPoints
}

const winConditions = {
  A: 'Z', // rock beats scissors
  B: 'X', // paper beats rock
  C: 'Y'  // scissors beats paper
}

const loseConditions = {
  A: 'Y', // rock loses with paper
  B: 'Z', // paper loses with scissors
  C: 'X'  // scissors loses with rock
}

const drawConditions = {
  A: 'X',
  B: 'Y',
  C: 'Z'
}

const secretStrategy = (str) => {
  switch (str.at(-1)) {
    case 'X':
      // i need to lose
      return str.at(0) + ' ' + winConditions[str.at(0)]
    case 'Y':
      // i need to draw
      return str.at(0) + ' ' + drawConditions[str.at(0)]
    case 'Z':
      // i need to win
      return str.at(0) + ' ' + loseConditions[str.at(0)]
    default:
      break
  }
}

const part1 = input
  .map(calcScore)
  .reduce((acc, val) => acc + val)

const part2 = input
  .map(secretStrategy)
  .map(calcScore)
  .reduce((acc, val) => acc + val)

console.log({ part1, part2 })
