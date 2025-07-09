// Write a JavaScript program to clone an array.

let array = [1, 2, 3, 4, 5];

let copyarray = [];

for (let i = 0; i < array.length; i++) {
  copyarray[i] = array[i];
}

console.log(copyarray);

//method 2 copying array using map

const newarr = array.map((val) => val);
console.log(newarr);

//method 3 using spread

const newarr2 = [...array];
console.log(newarr2);
