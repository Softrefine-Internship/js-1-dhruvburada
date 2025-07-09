// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]

function mergeArray(arr1, arr2) {
  let i = 0;
  let mergedArray = [...arr1, ...arr2];

  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = 0; j < mergedArray.length - 1; j++) {
      if (mergedArray[j] > mergedArray[j + 1]) {
        let temp = mergedArray[j];
        mergedArray[j] = mergedArray[j + 1];
        mergedArray[j + 1] = temp;
      }
    }
  }

  return mergedArray;
}

let arr1 = [3, 5, 1];

let arr2 = [4, 2];
let result = mergeArray(arr1, arr2);
console.log(result);

//Approach 2 using built in methods

let merged = [...arr1, ...arr2].sort((a, b) => a - b);

console.log(merged);
