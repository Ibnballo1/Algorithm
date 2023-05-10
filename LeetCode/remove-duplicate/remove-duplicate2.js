/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let result = [...nums];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== nums [i + 1]) {
      // result.push(nums[i])
      
  //   }
  // }
  return result;
};

console.log(removeDuplicates([1, 1, 2])); // Output: [1, 2]
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: [0, 1, 2, 3, 4]
