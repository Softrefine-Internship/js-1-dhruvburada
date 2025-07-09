// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

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

console.log(mergeUnique([1, 2, 3], [100, 2, 1, 10]));
