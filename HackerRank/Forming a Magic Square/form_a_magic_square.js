/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
  // Write your code here
  let totalCost = 0;
  const magicConst = 15;
  for (let i = 0; i < s.length; i++) {
    let sumOfEachRow = 0
    for (let row = 0; row < s.length; row++) {
      sumOfEachRow += s[i][row]
    }
    totalCost += Math.abs(magicConst - sumOfEachRow)
  }
  console.log(totalCost);
}

const matrix = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]
const matrix2 = [[4, 9, 2], [3, 5, 7], [8, 1, 5]]
const matrix3 = [[4, 5, 8], [2, 4, 1], [1, 9, 7]]

formingMagicSquare(matrix) // Output: 7
formingMagicSquare(matrix2) // Output: 1
formingMagicSquare(matrix3) // Output: 14
