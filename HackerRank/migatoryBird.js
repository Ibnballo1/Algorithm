// FROM HR

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Write your code here
  const obj = {};
  const mostSightedId = [];
  let allCount = [];
  const checkedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkedArr.includes(arr[i])) {
      continue;
    } else {
      checkedArr.push(arr[i]);
      let counts = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          counts++;
        }
      }
      allCount.push(counts)
      obj[arr[i]] = counts;
    }
  }
  const maxCount = Math.max(...allCount);
  Object.entries(obj).forEach(([key, value]) => {
    if (value === maxCount) {
      mostSightedId.push(key);
    }
  })
  console.log(Math.min(...mostSightedId));
}

migratoryBirds([1, 1, 2, 2, 3]); // => 1
migratoryBirds([1, 4, 4, 4, 5, 3]); // => 4
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4,]); // => 3
