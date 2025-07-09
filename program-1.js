// Write a JavaScript program to clone an array.

let array = [1, 2, 3, 4, 5];

let copyarray = [];

for (let i = 0; i < array.length; i++) {
  copyarray[i] = array[i];
}

console.log(copyarray);
