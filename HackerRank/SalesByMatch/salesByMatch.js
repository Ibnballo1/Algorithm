/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  let result = 0;
  let finalResult = 0;
  const sortedArr = ar.sort();
  for (let i = 0; i < n; i++) {
    if (ar[i] === sortedArr[i]) {
      result += 1
      if (ar[i] !== ar[i + 1]) {
        finalResult += Math.floor(result / 2);
        result = 0
      }
    }
  }
  console.log(finalResult);
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); // => 3
