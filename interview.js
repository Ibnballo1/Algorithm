// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference between the two arrays.

// You can return the array with its elements in any order.

// arrOne = [1, 2, 3]
// arrTwo = [2, 4, 6]

// Output
// newArr = [1, 3, 4, 6]

// check if any elementy in the first arr is not in the second arr
// if it is not in the second arr, I will add it to the new arr
// the remaining element from the second arr should be added to the newarr

function compareArr(firstArr, secondArr) {
  let joinArr = [...firstArr, ...secondArr]
  let newArr = []
  let obj = {}
  for (let i = 0; i < joinArr.length; i++) {
    let counter = 0;
    for (let j = 0; j < joinArr.length; j++) {
      if (joinArr[i] === joinArr[j]) {
        counter++;
        obj[joinArr[i]] = counter;
      }
    }
  }
  for (key in obj) {
    if (obj[key] === 1) {
      newArr.push(parseInt(key))
    }
  }
  return newArr
}

console.log(compareArr([1, 2, 3, 2], [2, 4, 6]));
console.log(compareArr([7, 1, 2, 3], [4, 5, 6, 7]));
console.log(compareArr([1, 3, 2, 6, 5, 8], [2, 4, 6, 8]));
console.log(compareArr([1, 0, 5, 2, 6, 5, 8], [2, 3, 4, 6, 8]));
