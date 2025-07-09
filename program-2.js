// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

function flatArray(arr) {
  let flatarray = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (Array.isArray(item)) {
      const nested = flatArray(item);

      for (let j = 0; j < nested.length; j++) {
        flatarray.push(nested[j]);
      }
    } else {
      flatarray.push(item);
    }
  }

  return flatarray;
}

const input = [1, 2, [3, 4], [5, [6, 7]]];
console.log(flatArray(input));

//Approach 2 using built in methods

console.log(input.flat(Infinity));
