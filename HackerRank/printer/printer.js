/*
 * Complete the 'getTime' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts STRING s as parameter.
 */

function getTime(s) {
  // Write your code here
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let fwdCheckh = 0;
  let backwardCheck = 0;

  // loop through the string s
  for (let i = 0; i < s.length; i++) {
    // loop for checking forward direction
    for (let j = 0; j < alphabets.length; j++) {
      // check the equility of the string with each element of the alphabets
      if (s[i] == alphabets[j]) {
        fwdCheckh += j;
      }
    }

    // loop for checking backward direction
    for (let j = alphabets.length; j > 0; j--) {
      // check the equility of the string with each element of the alphabets
      if (s[i] == alphabets[j]) {
        backwardCheck += j;
      }
    }
  }

  console.log('forward check is: ' + fwdCheckh + ' and backward check is: ' + backwardCheck)

  if (fwdCheckh > backwardCheck) {
    return backwardCheck;
  } else {
    return fwdCheckh;
  }
}

console.log(getTime("AB"));
// console.log(getTime("AZGB"));
