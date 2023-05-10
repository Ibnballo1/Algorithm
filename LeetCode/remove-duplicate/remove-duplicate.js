/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // create a loop using first element from nums and last element from nums
//   console.log('first element: ', nums[0]);
//   console.log('last element: ', nums[nums.length-1]);
let result = []
  for (let i = nums[0]; i <= nums[nums.length - 1]; i++) {
    result.push(i);
  }
  return result;
};

console.log(removeDuplicates([1, 1, 2])); // Output: [1, 2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: [0, 1, 2, 3, 4]
