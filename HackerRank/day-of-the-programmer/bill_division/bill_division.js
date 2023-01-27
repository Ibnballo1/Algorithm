/*
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
  for(let i = 0; i < bill.length; i++) {
    if (bill[i] !== bill[k]) {
      totalBill += bill[i]
    }
  }
  let annaBill = totalBill / 2;
  return (annaBill === b)
    ? "Bon Appetit"
    : Math.abs(b - annaBill);
}

console.log(bonAppetit([3, 10, 2, 9,], 1, 7)); // Should return Bon Appetit
console.log(bonAppetit([3, 10, 2, 9,], 1, 12)); // Should return 5
