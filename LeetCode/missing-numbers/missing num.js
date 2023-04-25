/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNum(nums) {
  // Loop through the element in the array
  let missing_num = 0;

  for (let i = 0; i <= nums.length; i++) {
    let isPresent = false;
    for (let j = 0; j < nums.length; j++) {
      if (i === nums[j]) {
        isPresent = true;
        break;
      }
    }

    if (isPresent === false) {
      return missing_num = i
    }
  }
}

console.log(missingNum([3, 0, 1])); // Output = 2
console.log(missingNum([0, 1])); // Output = 2
console.log(missingNum([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output = 8
