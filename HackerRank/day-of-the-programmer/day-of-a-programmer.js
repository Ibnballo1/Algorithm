/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

// function dayOfProgrammer(year) {
//   // Write your code here
//   let days = 0;
//   const day = 256;
//   let date = '';
//   for (let i = 0; i < 8; i++) {
//     let loopMonth = new Date(year, i + 1);
//     loopMonth.setDate(0);
//     days += loopMonth.getDate();
//     if (year >= 1700 && year <= 1917 && year % 4 === 0) {
//       if (loopMonth.getDate() === 28) {
//         days += 1;
//       }
//     }
//   }
//   let dayInSept = day - days;
//   if (year === 1918) {
//     dayInSept += 13;
//   }
//   date = `${dayInSept}.09.${year}`;
//   console.log(date);
// }

function dayOfProgrammer(year) {
  if (year >= 1700 && year <= 1917 && year % 4 == 0) {
    console.log(`12.09.${year}`)
  } else if (year === 1918) {
    console.log(`26.09.1918`);
  } else if (year >= 1918 && year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`12.09.${year}`);
  } else {
    console.log(`13.09.${year}`);
  }
}

dayOfProgrammer(2017); // 13.09.2017
dayOfProgrammer(1800); // 12.09.1800
dayOfProgrammer(2016); // 12.09.2016
dayOfProgrammer(1916); // 12.09.1916
dayOfProgrammer(1918); // 26.09.1918
