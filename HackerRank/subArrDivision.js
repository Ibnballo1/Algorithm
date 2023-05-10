/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  // Write your code here
  let counter = 0
  for (let i = 0; i < s.length; i++) {
    let addSegment = 0
    for (let j = 0; j < m; j++) {
      addSegment += s[i + j]
    }
    if (addSegment === d) {
      counter += 1
    }
  }
  if (counter > 0) {
    return counter
  } else {
    return 0
  }
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // => 2
console.log(birthday([2, 2, 1, 3, 2], 4, 2)); // => 2
console.log(birthday([1, 1, 1, 1, 1], 3, 2)); // => 0
console.log(birthday([4], 4, 1)); // => 1
