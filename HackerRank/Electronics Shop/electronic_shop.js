/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
  let sum = 0
  let maxSum = 0

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      sum = keyboards[i] + drives[j]
      if (sum > maxSum && sum <= b) {
        maxSum = sum
      }
    }
  }
  if (maxSum !== 0 && maxSum <= b) {
    return maxSum;
  } else {
    return -1
  }
}


console.log(getMoneySpent([3, 1], [5, 2, 8], 10)) // Output: 9
console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60)) // Output: 58
console.log(getMoneySpent([4], [5], 5)) // Output: -1
