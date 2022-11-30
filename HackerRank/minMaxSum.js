/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
  let minMaxSum = [];
  let max = 0;
  let min = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        sum += arr[j];
      }
    }
    minMaxSum.push(sum);
  }
  if (minMaxSum[0] > minMaxSum[1]){
      max = minMaxSum[0];
      min = minMaxSum[1];
   }
   else{
      max = minMaxSum[1];
      min = minMaxSum[0];
   }
   for (let i = 2; i < minMaxSum.length; i++){
      if (minMaxSum[i] > max)
         max = minMaxSum[i];
      else if (minMaxSum[i] < min)
         min = minMaxSum[i];
   }
   console.log(`${min} ${max}`);
}

miniMaxSum([1, 2, 3, 4, 5]);