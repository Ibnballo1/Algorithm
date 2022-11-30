// From HR

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  // Write your code here
  let uniqueValue = '';

  if (a.length === 1) {
    uniqueValue = a[0];
    console.log(uniqueValue)
  } else {
    for (let i = 0; i < a.length; i++) {
      let count = 0;
      for (let j = 0; j < a.length; j++) {
        if (a[i] === a[j]) {
          count += 1;
        }
      }
      if (count === 1) {
        uniqueValue = a[i];
      }
    }
    console.log(uniqueValue);
  }
}

lonelyinteger([4]); // 4
lonelyinteger([0, 1, 0]); // 1
lonelyinteger([0, 0, 1, 2, 1]); // 2
lonelyinteger([1, 1, 2]); // 2