/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  // Write your code here
  let countValleys = 0;
  let isValley = false;
  let seaLevel = 0;
  for (let i = 0; i < steps; i++) {
    path[i] === 'U' ? seaLevel++ : seaLevel--;
    if (seaLevel < 0) {
      isValley = true
    } else if(isValley && seaLevel >= 0) {
      isValley = false
      countValleys++;
    }
  }
  console.log(countValleys);
}

countingValleys(8, 'UDDDUDUU');
