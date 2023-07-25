import { findPairsNumbers } from "../findPairsNumbers";

describe("findPairsNumbers", () => {

  test("should return an empty array when given an empty array", () => {
    const result = findPairsNumbers([], 10);
    expect(result).toEqual([]);
  });

  test("should return an empty array when no pairs are found", () => {
    const result = findPairsNumbers([1, 2, 3, 4], 10);
    expect(result).toEqual([]);
  });

  test("should return an array with one pair when one pair is found", () => {
    const result = findPairsNumbers([1, 2, 3, 4, 5], 9);
    expect(result).toEqual([[4, 5]]);
  });

  test("should return an array with multiple pairs when multiple pairs are found", () => {
    const result = findPairsNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
    expect(result).toEqual([
      [1, 9],
      [2, 8],
      [3, 7],
      [4, 6],
    ]);
  });

  test("should return an array with multiple pairs example code values", () => {
    const result = findPairsNumbers([1, 9, 5, 0, 20, -4, 12, 16, 7], 12);
    expect(result).toEqual([
      [-4, 16],
      [0, 12],
      [5, 7],
    ]);
  });
});
