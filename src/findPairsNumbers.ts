export const findPairsNumbers = (numbers: number[], target: number): number[][] => {
  let arrayNumbersSorted = [...numbers];
  arrayNumbersSorted.sort((a, b) => a - b);
  const pairs: number[][] = [];
  let leftIndex = 0;
  let rightIndex = arrayNumbersSorted.length - 1;
  while(leftIndex < rightIndex){
    const sum = arrayNumbersSorted[leftIndex] + arrayNumbersSorted[rightIndex];
    if(sum === target){
      pairs.push([
        arrayNumbersSorted[leftIndex],
        arrayNumbersSorted[rightIndex],
      ]);
      leftIndex++;
      rightIndex--;
    } else if(sum > target){
      rightIndex--;
    } else {
      leftIndex++;
    }
  }

  return pairs;
}