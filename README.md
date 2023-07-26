# Coding Challenge Sum of Two

In this project, an algorithm is developed to find pairs of numbers that, given an array of integers and a target number, returns the list of pairs that when added together result in the target value.

## How to execute
This project is made with Typescript, it requires the following versions of Node:
 - `Node v16.15.0`

the first command to execute is: 


```bash
npm install
```

then it is executed by passing the parameters through the console as follows: 

## Example
Sample of execution with the parameters by console 
```bash
> npm start 1,9,5,0,20,-4,12,16,7 12
​
[ -4, 16 ]
[ 0, 12 ]
[ 5, 7 ]
​
```

### Passing a file
Ejemplo de ejecucion pasando un archivo con los parametros

```bash
> npm start -- --file ./param_file.txt
​
[ -4, 16 ]
[ 0, 12 ]
[ 5, 7 ]
​
```

the file structure should be as follows:
the first part in a single line should contain the list of numbers separated by comma, and then a space to pass the target value. 


`param_file.txt`
```
1,9,5,0,20,-4,12,16,7 12
```

## Testing

A

## Analysis of the algorithm

the strategy used to accomplish this challenge, is to make the algorithm faster than `O(n^2)`, spoiler was achieved in `O(n log n)`

In this case, we used the strategy of first ordering the array from smallest to largest, where it has a time complexity of `O(n log n)`, then two indexes are created, one at the beginning **(leftIndex)** and another at the end **(rightIndex)** of the arrangement already ordered.

With this data we start iterating over the array taking the start value and the end value to compare if the sum of these results in the target value.

```javascript
L = leftIndex, R= rightIndex T= target [6], pairs = []
   0  1  2  3  4 
 [ 1, 2, 3, 4, 5 ]
   ^           ^
   L           R
```

In the case where the sum gives the target value we add it to the list of working pairs of numbers and we increment the **leftIndex++** and decrement the **rightIndex--**.

```javascript
L = leftIndex, R= rightIndex T= target [5], pairs = []
   0  1  2  3  4
 [ 0, 2, 3, 4, 5 ]
   ^           ^
   L           R

   0 + 5 = 5 ✅
pairs.push([0,5])   
pairs ->  [[0,5]] 
L++ -> (L=1)
R-- -> (R=3)

```



In the case where the result of the sum gives a value greater than the target value, then we move to the left (decrease by 1) the value of the index on the right. **(rightIndex--)**, and continue.

```javascript
L = leftIndex, R= rightIndex T= target [5], pairs = [[0,5]]
   0  1  2  3  4 
 [ 0, 2, 3, 4, 5 ]
      ^     ^
      L     R
  2 + 4 = 6 != T ❌
  
  6 > T
  L   -> (L=1)
  R-- -> (R=2)
```


and in the case where the sum gives a value less than the target value, we move to the right (increment by 1) the value of the left incidence **(leftIndex++)**

```javascript
L = leftIndex, R= rightIndex T= target [5], pairs = [[0,5]]
   0  1  2  3  4 
 [ 0, 2, 3, 4, 5 ]
      ^  ^
      L  R
  2 + 3 = 5 ✅
  pairs.push([2,3])
  paris ->  [[0,5], [2,3]]
  L++ -> (L=2)
  R-- -> (R=1)
```

so long as the index on the left is less than the index on the right

```javascript 
L = leftIndex, R= rightIndex T= target [5], pairs = [[0,5], [2,3]]

L < R -> (2 < 1) ❌ Stop!

return pairs

pairs = [
  [ 0, 5 ],
  [ 2, 3 ]
]

```


