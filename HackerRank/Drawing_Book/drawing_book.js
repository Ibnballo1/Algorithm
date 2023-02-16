/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  // Write your code here
  let count = 0;
  let count2 = 0;
  let countFromFirstPage = 0;
  let countFromBackPage = 0;

  // if total number of pages is either odd or even
  // turning from first page
  for (let i = 1; i <= n; i += 2) {
    if (i === p || i - 1 === p) {
      countFromFirstPage = count;
    }
    count += 1;
  }

  // Turning from the back page
  if (n % 2 !== 0) {
    for (let j = n - 1; j >= 1; j -= 2) {
      if (j === p || j + 1 === p) {
        countFromBackPage = count2;
      }
      count2 += 1;
    }
  } else {
    for (let j = n; j >= 1; j -= 2) {
      if (j === p || j + 1 === p) {
        countFromBackPage = count2;
      }
      count2 += 1;
    }
  }
  // find the minimum number between turning from the front and from the back
  countFromFirstPage > countFromBackPage
    ? console.log(countFromBackPage)
    : console.log(countFromFirstPage);
}

pageCount(10, 9); // Output: 1
pageCount(5, 3); // Output: 1
pageCount(6, 2); // Output: 1
pageCount(5, 4); // Output: 0
