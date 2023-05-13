// Using two pointers

// Haven't solve it yet with two pointers

function twoSum(nums, target) {
  // nums.sort((a, b) => a - b);
  let leftPt = 0; // the first pointer is at index 0
  let rightPt = nums.length - 1; // the second pointer is at last index

  while (leftPt <= rightPt) {
    const sum = nums[leftPt] + nums[rightPt];
    if (sum === target) {
      return [leftPt, rightPt];
    } else if (sum < target) {
      leftPt++;
    } else {
      rightPt--;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [ 0, 1 ]
console.log(twoSum([3, 2, 4], 6)); // Output: [ 1, 2 ]
console.log(twoSum([3, 3], 6)); // Output: [ 0, 1 ]
console.log(twoSum([3, 2, 3], 6)); // Output: [ 0, 2 ]
console.log(twoSum([2, 5, 5, 7], 10)); // Output: [ 1, 2 ]
