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
  const rejectedBill = bill[k];
  for (let i = 0; i < bill.length; i++) {
    totalBill += bill[i];
  }
  let annaBill = (totalBill - rejectedBill) / 2;
  console.log(annaBill === b ? "Bon Appetit" : Math.abs(b - annaBill));
}

bonAppetit([3, 10, 2, 9], 1, 12); // Return 5
bonAppetit([3, 10, 2, 9], 1, 7); // Return Bon Appetit
