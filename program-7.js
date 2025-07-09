// Write javascript program to remove duplicate objects from an array.

// Sample Input:
array = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]

let temp = "";
let unique = [];

for (let i = 0; i < array.length; i++) {
  if (!temp.includes(array[i].title + array[i].author)) {
    temp += array[i].title + array[i].author + ",";
    unique.push(array[i]);
  }
}

console.log(unique);
