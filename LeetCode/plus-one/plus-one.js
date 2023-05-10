/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let result = "";
  let resArr = []
  result = BigInt(digits.join(""));
  resArr = Array.from(String(result + BigInt(1)), Number)
  return resArr;
};

console.log(plusOne([1,2,3])); // Output [1,2,4]
console.log(plusOne([1, 2, 9])); // Output [1,3,0]
console.log(plusOne([4, 3, 2, 1])); // Output [4,3,2,2]
console.log(plusOne([9])); // Output [1, 0]
console.log(plusOne([9, 9])); // Output [1, 0, 0]
console.log(plusOne([9, 1, 9, 9])); // Output [9, 2, 0, 0]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); // Output [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
