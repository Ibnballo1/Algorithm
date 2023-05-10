// From HR

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let counter = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if ((i < j) && (i !== j)) {
          if ((ar[i] + ar[j]) % k === 0) {/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
  // Write your code here
  let totalBill = 0;
  const rejectedBill = bill[k];
  for(let i = 0; i < bill.length; i++) {
    totalBill += bill[i]
  }
  let annaBill = (totalBill - rejectedBill) / 2;
  console.log((annaBill === b)
    ? "Bon Appetit"
    : Math.abs(b - annaBill));
}

            counter += 1
          }
        }
    }
  }
  console.log(counter);
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]);
