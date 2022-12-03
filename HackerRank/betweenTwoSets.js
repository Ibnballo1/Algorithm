// From HR

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  // Write your code here
  let arrToConsider = []
  let consideredArray = []
  for (let i = 0; i < a.length; i++) {
    for (let j = a[0]; j <= b[b.length - 1]; j++) {
      if (j % a[i] === 0) {
        arrToConsider.push(j)
      }
    }
  }
  for (let i = 0; i < arrToConsider.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (b[j] % arrToConsider[i] === 0) {
        consideredArray.push(arrToConsider[i])
      }
    }
  }
  let counts = []
  consideredArray.sort(function(a, b) {
    return a - b
  })
  let current = 0;
  let count = 0;

  for (let i = 0; i < consideredArray.length; i++) {
    if (consideredArray[i] != current) {
      if (count > 0) {
        current + ' comes ' + count + ' times'
        counts.push(count)
      }
      current = consideredArray[i]
      count = 1
    } else {
      count++
    }
  }
  if (count > 0) {
    current + ' comes ' + count + ' times'
    counts.push(count)
  }
  let maxCount = 0
  counts.filter((num) => {
    if (num === Math.max(...counts)) {
      maxCount += 1
    }
  })
  console.log(maxCount);
}

arr1 = [2, 6]
arr2 = [24, 36]

getTotalX(arr1, arr2);
getTotalX([2, 4], [16, 32, 96])