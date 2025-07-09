// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

function addDash(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) % 2 == 0 && parseInt(str[i + 1]) % 2 == 0) {
      newString += str[i] + "-";
    } else {
      newString += str[i];
    }
  }

  return newString;
}

console.log(addDash("025468"));
