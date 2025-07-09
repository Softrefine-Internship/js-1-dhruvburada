// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

function mergeUnique(arr1, arr2) {
  let mergedArray = arr1.filter((x) => {
    if (!arr2.includes(x)) {
      return x;
    }
  });

  arr2.forEach((element) => {
    mergedArray.push(element);
  });

  return mergedArray;
}

console.log(mergeUnique([1, 2, 3, 4, 5, 6], [3, 4, 5, 7]));
