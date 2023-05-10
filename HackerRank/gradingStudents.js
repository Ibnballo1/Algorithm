// From HackerRank

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    let failingGrade = grades[i] < 38;
    let roundedGrade = grades[i] + (5 - grades[i] % 5);  // To get the nearest multiple
    if (failingGrade) {
      console.log(grades[i]);
    }else if ((roundedGrade - grades[i]) < 3) {
      grades[i] = roundedGrade;
      console.log(grades[i]);
    } else {
      console.log(grades[i]);
    }
  }

  // Using map method

  // grades.map((grade) => {
  //   let failingGrade = grade < 38;
  //   let roundedGrade = grade + (5 - grade % 5);  // To get the nearest multiple
  //   if (failingGrade) {
  //     console.log(grade);
  //   }else if ((roundedGrade - grade) < 3) {
  //     grade = roundedGrade;
  //     console.log(grade);
  //   } else {
  //     console.log(grade);
  //   }
  // })
}

gradingStudents([73, 67, 38, 33]); // 75, 67, 40, 33