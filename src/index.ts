
import { findPairsNumbers } from './findPairsNumbers';
import { getInputFromArgs } from './helpers';

const showResult = (numbers: number[], target: number) => {
  const pairs = findPairsNumbers(numbers, target);
  pairs.forEach((pair) => {
    console.log(pair);
  });
};

getInputFromArgs(process.argv).then(input => {
  showResult(input.numbers, input.target);
});



