/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

arr = [1, 0, 0, 0, 1, 0, 0];
n = 2;

function isPossible(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == 0 &&
      (arr[i + 1] == 0 || i + 1 == arr.length) &&
      (arr[i - 1] == 0 || i - 1 < 0)
    ) {
      n -= 1;
      arr[i] = 1;
    }

    // console.log(arr);
  }

  if (n <= 0) {
    return true;
  }
  return false;
}

console.log(isPossible(arr, 1));
console.log(isPossible(arr, n));
console.log(isPossible([0, 0, 0, 1, 0, 0, 0, 0], 3));
