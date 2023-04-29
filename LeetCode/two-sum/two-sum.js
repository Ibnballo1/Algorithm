/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var twoSum = function(nums, target) {
  // the input is an int, array of integer
  // the output is also int
  // I want to return the indices of the addition
  // of two elements from the nums array
  // that will be === to the target
  let result = []

  // first i need to loop through the array to add each element with other element
  for (let i = 0; i < nums.length; i++) {
    // Now I will check if the addition of any 2 elements == to the target
    if (nums[i] + nums[i + 1] == target) {
      // return their index
      result.push(i, i + 1)
      return result;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [ 0, 1 ]
console.log(twoSum([3, 2, 4], 6)); // Output: [ 1, 2 ]
console.log(twoSum([3, 3], 6)); // Output: [ 0, 1 ]
