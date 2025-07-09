// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

let freq = {};
input = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let max = -Infinity;
let key;
for (let i = 0; i < input.length; i++) {
  if (!freq.hasOwnProperty(input[i])) {
    freq[input[i]] = 1;
  } else {
    freq[input[i]]++;
  }
}

for (let i in freq) {
  if (freq[i] > max) {
    max = freq[i];
    key = i;
  }
}

console.log(key, " occurs ", max, "times");
