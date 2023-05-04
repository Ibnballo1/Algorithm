/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(target - nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let value = map.get(nums[i]);
    console.log('Value is: ', value)
    if (value !== undefined && value !== i) {
      return [i, value];
    }
  }
}


// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [ 0, 1 ]
// console.log(twoSum([3, 2, 4], 6)); // Output: [ 1, 2 ]
// console.log(twoSum([3, 3], 6)); // Output: [ 0, 1 ]
console.log(twoSum([3, 2, 3], 6)); // Output: [ 0, 2 ]
// console.log(twoSum([2, 5, 5, 7], 10)); // Output: [ 1, 2 ]
