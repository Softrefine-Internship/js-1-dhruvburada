// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
arr1 = [1, 2, 3];
arr2 = [100, 2, 1, 10];

// Expected Output: c = [3, 10, 100]

let difference = [];

arr1.forEach((element) => {
  if (!arr2.includes(element)) {
    difference.push(element);
  }
});

arr2.forEach((element) => {
  if (!arr1.includes(element)) {
    difference.push(element);
  }
});

console.log(difference);
