// How to find numbers of duplicate value

function countDuplicate(arr) {
  arr.sort(function(a, b) {
    return a - b
  })
  console.log(arr);
  let current = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != current) {
      if (count > 0) {
        console.log(current + ' comes ' + count + ' times')
      }
      current = arr[i]
      count = 1
    } else {
      count++
    }
  }
  if (count > 0) {
    console.log(current + ' comes ' + count + ' times')
  }
}

const nums = [2, 1, 4, 2, 1, 9, 9, 6, 9, 7, 4, 6]
countDuplicate(nums);