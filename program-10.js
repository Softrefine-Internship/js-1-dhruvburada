// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
arr1 = [1, 0, 2, 3, 4];
arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

let start = 0;
let maxlen = arr1.length > arr2.length ? arr1.length - 1 : arr2.length - 1;
console.log(maxlen);
let total = [];
for (let i = 0; i <= maxlen; i++) {
  arr1[i] = arr1[i] ? arr1[i] : 0;
  arr2[i] = arr2[i] ? arr2[i] : 0;
  total.push(arr1[i] + arr2[i]);
}

console.log(total);
